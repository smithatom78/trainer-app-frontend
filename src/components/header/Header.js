import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';
export const Header = () => {
    return (
        <div>
            <nav className="header">
           <img className='logo' src={logo} alt="ICTAK FOOTER"/>  <h2  className='head' >ICTAK TRAINER MANAGEMENT SYSTEM</h2>
            <div className="headlinks">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/signup">Trainer Enrollment</Link>
                <Link className="link" to="/login">Login</Link>
            </div>
           </nav>
        </div>
    )
}
