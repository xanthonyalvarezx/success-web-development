import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Stylesheets/Nav.css'

class Nav extends Component {








    render() {
        return (

            <div id="nav-links">
                <nav>
                    <ul id='navList'>
                        <Link to="/">
                            <li>Home</li>
                        </Link>

                        <Link to="/Contact">
                            <li>Contact</li>
                        </Link>

                        <Link to="/Previous-Projects">
                            <li>Previous Projects</li>
                        </Link>

                        <Link to="/Meet-Us">
                            <li>Meet The Team!</li>
                        </Link>

                    </ul>


                </nav>





            </div>)
    }
}
export default Nav