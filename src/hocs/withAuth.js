import React from 'react';
import { connect } from 'react-redux';

const withAuth = (Component) => {
  class WrapperComponent extends React.Component {
    render() {
      return (this.props.authStatus) ? <Component {...this.props} /> : <h1>Unauthorized</h1>
    }
  }
  const mapStateToProps = (state) => ({ authStatus: state.authStatus.authStatus });
  return connect(mapStateToProps)(WrapperComponent);
}

export default withAuth;