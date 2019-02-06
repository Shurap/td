import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { connect } from "react-redux";

const Header = (props) => (
  <header className={styles.header}>
    <h1>training diary</h1>
    <nav>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/signin'>Sign In</Link>
      <Link to='/home'>Home</Link>
    </nav>
    <div>
      <p>{props.userName ? props.userName : '...Username...'}</p>
      <Link to='/signout'>Sign Out</Link>
    </div>
  </header>
);

const mapStateToProps = (state) => ({ userName: state.main.userName });

export default connect(mapStateToProps)(Header);