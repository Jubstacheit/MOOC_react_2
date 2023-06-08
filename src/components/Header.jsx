import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top mt-1" />
            MOOC
          </div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">Counter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/roles">Rôles</Link>
            </li>
          </ul>
          <div className="navbar-text">
            {props.user
              ? <div>Bienvenue  {props.user}</div>
              : <div><Link to="/login">Connectez-vous !</Link>
                  <br/>ou&nbsp;
                    <Link to="/register">Inscrivez-vous</Link>
                </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  user: propTypes.string
}

export default Header;
