import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Header } from '../../components';
import { isLoggedIn, getMentor, getLoadingState } from '../../helpers';
import { logout, fetchMentor } from '../../actions';


const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state),
  mentor: getMentor(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout());
  },
  getMentorData() {
    dispatch(fetchMentor());
  },
});

@connect(mapStateToProps, mapDispatchToProps)
class MainLayout extends Component {
  static propTypes = {
    getMentorData: PropTypes.func,
  }

  static defaultProps = {
    getMentorData: null,
  }

  componentDidMount() {
    this.props.getMentorData();
  }

  render() {
    const { props } = this;

    return props.loading
      ? <LinearProgress />
      : (
        <Fragment>
          <Header logout={props.logout} loggedIn={props.loggedIn} mentor={props.mentor} />
          {props.children}
        </Fragment>
      );
  }
}

export { MainLayout };
