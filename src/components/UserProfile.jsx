import propTypes from "prop-types";
import {useCallback} from "react";

function UserProfile(props) {

    const handleDelete = useCallback(
        (event) => {
            event.stopPropagation()
            props.deleteUser(props.user.id)
        }
        , [props])

    return (
    <div className="card">
      <img src="https://media.istockphoto.com/photos/winter-paysage-picture-id182902156?b=1&k=20&m=182902156&s=170667a&w=0&h=T-p_uID6Nc2l3Ww5X42LlSBODHav5Qn31UHe4PRaWNc=" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
          <div>Email : {props.user.email}</div>
          {props.complete && (
              <div>
                  <div>Addresse : {props.user.address?.suite} {props.user.address?.street} {props.user.address?.street}</div>
                  <div>Téléphone : {props.user.phone}</div>
                  <div>Site web : {props.user.website}</div>
                  <div>Entreprise : {props.user.company?.name}</div>
              </div>
              )}

          {props.deleteUser && (
              <div className="d-flex justify-content-end">
              <button className="btn btn-danger" onClick={handleDelete}>
                  <i className="bi bi-trash3">
                  </i>
              </button>
          </div>
          )}
      </div>
    </div>
    );
}

UserProfile.propTypes = {
    user: propTypes.object.isRequired,
    deleteUser: propTypes.func,
    complete: propTypes.bool
}

export default UserProfile;