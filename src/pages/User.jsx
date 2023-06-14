import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import UserProfile from "../components/UserProfile";
import propTypes from "prop-types";

function User() {

    const {id} = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then((result) => setUser(result.data))

    }
    , [id])

    return (
        <div>
            <UserProfile user={user} complete>

            </UserProfile>
        </div>
    );
}

UserProfile.propTypes = {
    user: propTypes.object.isRequired,
    deleteUser: propTypes.func.isRequired
};

export default User;