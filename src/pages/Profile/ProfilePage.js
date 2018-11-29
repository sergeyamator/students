import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMentor } from '../../actions';

const mapStateToProps = () => {

}

const mapDispatchToProps = dispatch => ({
  getMentorData() {
    dispatch(fetchMentor());
  },
});

@connect(mapStateToProps, mapDispatchToProps)
class ProfilePage extends Component {
  static propTypes = {
    getMentorData: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.getMentorData();
  }

  render() {
    return (
      <h1>Profile Page</h1>
    );
  }
}

export { ProfilePage };
