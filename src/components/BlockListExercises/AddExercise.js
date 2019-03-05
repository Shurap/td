import React, { Component } from 'react';
import styles from './AddExercise.module.css';

class AddExercise extends Component {

  state = {
    label:''
  }

  onChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.label);
  }

  render() {
    return (
      <form className={styles.fieldAddExercise} 
            onSubmit={this.onSubmit }>
        <input type="text"
               onChange={this.onChange}
               value={this.state.label} />
        <button>Add</button>
      </form>
    )
  }
}

export default AddExercise;