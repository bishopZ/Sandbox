
import React from 'react';
import {Link} from 'react-router-dom';

var Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <hr />
    </div>
  );
};

module.exports = Navbar;
