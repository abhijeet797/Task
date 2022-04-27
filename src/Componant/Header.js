import React from 'react'
import '../Css/Header.css'
function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar ">
                <div className="container">
                    <a className="navbar-brand" href="#"><i className="fa-regular fa-award"></i> Instaread</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link  mx-2" aria-current="page" href="#">Discover</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  mx-2" aria-current="page" href="#">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active mx-2" aria-current="page" href="#">Try Inserted</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Login</a></li>
                                    <li><a className="dropdown-item" href="#">Sign Up </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header