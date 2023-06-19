import React, {useCallback, useContext} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import {Context} from "../context";
import classnames from "classnames";

function Header() {
  const {context, dispatch} = useContext(Context)
  const switchTheme = useCallback(() => {
        dispatch({type: 'switchTheme'})
      },
      [dispatch],
  );

  const logout = useCallback(() => {
        dispatch({type: 'logout'});
      } , [dispatch], );


  return (
    <div>
      <nav className={classnames("navbar navbar-expand-md", context.theme==='light' ? "navbar-dark bg-dark" : 'navbar-light bg-secondary')}>
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
          <div className="navbar-text me-4">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={switchTheme}/>
                <label className="form-check-label"
                       htmlFor="flexSwitchCheckDefault">
                  {context.theme}
                </label>
            </div>
          </div>
          <div className="navbar-text">
            {context.user.name
              ? (<div>
                  Bienvenue {context.user.name} -
              <button id="disconnect" type="submit" className={"btn ms-2 btn-outline-" + context.theme} onClick={logout}>
                Déconnexion
              </button>
              </div>)
              : (<div><Link to="/login">Connectez-vous !</Link>
                  <br/>ou&nbsp;
                    <Link to="/register">Inscrivez-vous</Link>
                </div>)
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
