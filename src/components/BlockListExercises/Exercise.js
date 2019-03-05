import React, {Component} from 'react';
import styles from './Exercise.module.css';

export default class Exercise extends Component {

  onToggleSelected = () => {
    console.log(this.props.label);
  }

  render() {

    const {label} = this.props;

    return (
      <div className={styles.exercise_selected} onClick={this.onToggleSelected}>
        {label}  
      </div>
    );
  }  
}