import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStudent } from '../../actions';
import { getStudentById } from '../../selectors';

import styles from './Student.scss';

const mapStateToProps = state => ({
  student: getStudentById(state),
});

function mapDispatchToProps(dispatch) {
  return {
    getStudent(id) {
      dispatch(fetchStudent(id));
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Student extends Component {
  static propTypes = {
    student: PropTypes.shape(),
    match: PropTypes.shape().isRequired,
    getStudent: PropTypes.func.isRequired,
  }

  static defaultProps = {
    student: {},
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getStudent(id);
  }

  render() {
    const { student } = this.props;

    return (
      <section className={styles.wrapper}>
        {JSON.stringify(student)}
      </section>
    );
  }
}

export { Student };
