import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'


class Navbar extends React.Component{

    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid mb-2">
                    <Link className="Navbar_brand" to='/'>
                        <span className="Navbar__text">To Do List </span>
                    </Link>
                    
                    <Link className="Navbar_brand" to='favorite'>
                        <span className="Navbar__text ml-5">Favorite </span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;