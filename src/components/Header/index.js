import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <Link to='/signup'>Sign Up</Link>
    <Link to='/signin'>Sign In</Link>
    <Link to='/signout'>Sign Out</Link>
  </div>
);

export default Header;