import './Menu.css';
import { Link } from 'react-router-dom';
import {
  HouseFill,
  GlobeAmericas,
  PersonFill,
  EnvelopeFill,
  BellFill,
} from 'react-bootstrap-icons';
export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark">
        <div className="container-fluid ">
          <HouseFill color="white" size={32} className="mx-3" />
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <GlobeAmericas color="white" size={32} className="mx-3" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bio">
                  <PersonFill color="white" size={32} className="mx-3" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/discography">
                  <EnvelopeFill color="white" size={32} className="mx-3" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/concerts">
                  <BellFill color="white" size={32} className="mx-3" />
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/button">
                  Button
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/music">
                  Music
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
