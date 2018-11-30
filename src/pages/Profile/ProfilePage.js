import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMentor } from '../../actions';
import styles from './ProfilePage.scss';

const mapStateToProps = () => ({});
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
      <section className={styles.profile}>

      </section>
    );
  }
}

export { ProfilePage };
