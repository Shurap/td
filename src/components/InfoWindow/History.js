import React, { Component } from 'react';
import styles from './History.module.css';

export default class History extends Component {

  render() {

    const dataIn = this.props.data.map((element, index) => {
      return (
        <div className={styles.wrapperNumbers} key={index}>
          <div className={styles.wrapperWight}>
            {element.wight}
          </div>
          <div className={styles.wrapperCount}>
            {element.count}
          </div>
          {/* {`${element.wight} ${element.count}`} */}
        </div>
      )
    });

    return (
      <div className={styles.history}>
        <div className={styles.wrapperData}>
          {this.props.name}
        </div>
        <div className={styles.wrapperText}>
          <p>weight</p>
          <p>repeat</p>
        </div>
        {dataIn}

      </div>
    )
  }
}