import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { connect } from "react-redux";

const Header = (props) => (
  <header className={styles.header}>
    <h1 className={styles.logo}></h1>
    <nav className={styles.nav}>
      { !props.authStatus ? (<Link className={styles.link} to='/signup'>Sign Up</Link>) : null }
      { !props.authStatus ? (<Link className={styles.link} to='/signin'>Sign In</Link>) : null }
      { props.authStatus ? (<Link className={styles.link} to='/home'>Home</Link>) : null }
    </nav>
    <div>
      {/* <p>Application under construction...</p> */}
    </div>
    <div>
    { props.authStatus ? (<p>{props.currentUserName ? props.currentUserName : '...Username...'}</p>) : null }
    { props.authStatus ? (<Link className={styles.link} to='/signout'>Sign Out</Link>) : null }
    </div>
  </header>
);

const mapStateToProps = (state) => ({ 
  currentUserName: state.main.currentUser.username,
  authStatus: state.authStatus.authStatus
});

export default connect(mapStateToProps)(Header);