import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg w-100">
            <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/list" className="nav-link">Logged Exercises</Link>
                        </li>
                        
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar
