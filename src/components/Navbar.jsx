import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css";
import { useTheme } from '../themeContext';

const Navbar = () => {

  const {theme, toggleTheme} = useTheme();
  

  return (
    <nav>
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="blog">Blog</Link>
      </div>
      <div className="mode-switch">
        <label>
          <input type="checkbox"
          onChange={toggleTheme}
          checked={theme==="dark"}
          />
          <span className='slider round'></span>
        </label>
      </div>
    </nav>
  )
}

export default Navbar