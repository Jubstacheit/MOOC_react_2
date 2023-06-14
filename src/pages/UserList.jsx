import { useCallback, useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function UserList() {
    const [searchCriteria, setSearchCriteria] = useState('')
    const handleSearch = useCallback(event => setSearchCriteria(event.target.value), [])
    const navigate = useNavigate()


    const [users, setUsers] = useState([])
    useEffect(() => {
        //Version fetch
        /*fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result => setUsers(result))*/

        //Version Axios
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(result => setUsers(result.data))
    }, [])


  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(searchCriteria.toLowerCase())))
  }, [searchCriteria, users])

    const deleteUser = useCallback((userId) => {
        axios.delete('https://jsonplaceholder.typicode.com/users/' + userId)
        setUsers(users.filter(user => user.id !== userId))
    }, [users])


  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <input type="text" className='form-control' placeholder='Recherche' onChange={handleSearch} />
      <div className="container mt-3">
        <div className="row">
          {
            filteredUsers.map((user, i) =>
              <div onClick={() => navigate('/users/' + user.id)} style={{cursor: "pointer"}} className="col-xs-6 col-sm-4 col-md-3 mb-3" key={i}>
                <UserProfile user={user} deleteUser={deleteUser} />
              </div>
            )}
          <div className="d-flex col-3 mb-3 justify-content-center align-items-center" >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;