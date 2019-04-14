import React, {Component} from 'react';
import styles from './Edit.module.css'

export default class Edit extends Component {
  
  render(){

    const {labelCount, labelWight} = this.props
  


    return(
      <div className={styles.edit}>
        <p>Edit</p>
        <input 
          type = "text"
          defaultValue={labelCount}
        ></input>
        <input
          type = "text"
          defaultValue={labelWight}
        ></input>
      </div>
    )
  }
}