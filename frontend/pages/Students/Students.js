import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { auth } from '../../actions';
import { isLoggedIn } from '../../helpers';
import styles from './Students.scss';

@connect(mapStateToProps, mapDispatchToProps)
class Students extends Component {
  state = {

  }

  onButtonClick = (evt) => {
    console.log(evt);
  }


  render() {
    const { props } = this;
    if (props.isLoggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <button className={styles.students} onClick={this.onButtonClick}>Students</button>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state),
});

function mapDispatchToProps(dispatch) {
  return {
    auth(url, userData) {
      dispatch(auth(url, userData));
    },
  };
}

export { Students };
