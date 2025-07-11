import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/projects" style={{ marginRight: 15, color: 'white', textDecoration: 'none' }}>Projects</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
