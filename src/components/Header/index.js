import React from 'react';
import { Link } from 'react-router-dom';

// Import css
import './styles.css';

const Header = () =>(

    <div className="navbar">
        <ul>
           <li><Link to="/" className="linkcss">Home</Link></li>
           <li><Link to="/profile" className="linkcss">Profile</Link></li>
           <li><Link to="*" className="linkcss">asdasd</Link></li>

        </ul>
    </div>
);

export default Header;

