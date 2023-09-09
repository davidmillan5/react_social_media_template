import './Menu.css';
import { Link } from 'react-router-dom';
export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rayden
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bio">
                  Bio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/discography">
                  Discography
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/concerts">
                  Concerts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/featuring">
                  Featuring
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fanzone">
                  Fanzone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registration">
                  Registration
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
              <li className="nav-item">
                <Link className="nav-link" to="/topTracks">
                  Top Tracks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
