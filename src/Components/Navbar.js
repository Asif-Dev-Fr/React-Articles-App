import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark justify-content-center">
            <Link className="navbar-brand" to="/">
                Accueil
            </Link>
        </nav>
    )
}

