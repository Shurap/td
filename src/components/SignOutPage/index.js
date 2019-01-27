import React from 'react';
import { withFirebase } from '../Firebase';

const SignOutPage = ({ firebase }) => (
  <div>
    <h2>Sign Out Page</h2>
    <button type="button" onClick={firebase.doSignOut}>
          Sign Out
    </button>
  </div>
);

export default withFirebase(SignOutPage);