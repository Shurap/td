import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';

import {connect} from "react-redux";

const Header = (props) => (
  <div className={styles.header}>
    <h2>training diary</h2>
    <Link to='/signup'>Sign Up</Link>
    <Link to='/signin'>Sign In</Link>
    <Link to='/signout'>Sign Out</Link>
    <Link to='/home'>Home</Link>
    <p>{props.userName}</p>
  </div>
);

const mapStateToProps = (state) => ({userName : state.main.userName});

export default connect(mapStateToProps)(Header);