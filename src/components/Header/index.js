import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { connect } from "react-redux";

const Header = (props) => (
  <header className={styles.header}>
    <h1>training diary</h1>
    <nav className={styles.nav}>
      <Link className={styles.link} to='/signup'>Sign Up</Link>
      <Link className={styles.link} to='/signin'>Sign In</Link>
      <Link className={styles.link} to='/home'>Home</Link>
    </nav>
    <div>
      <p>Application under construction...</p>
    </div>
    <div>
      <p>{props.currentUserName ? props.currentUserName : '...Username...'}</p>
      <Link className={styles.link} to='/signout'>Sign Out</Link>
    </div>
  </header>
);

const mapStateToProps = (state) => ({ currentUserName: state.main.currentUser.username });

export default connect(mapStateToProps)(Header);