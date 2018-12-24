import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { fetchStudents } from '../../actions';
import { StudentForm } from './StudentForm';
import { isLoggedIn, getStudents } from '../../selectors';

import styles from './Students.scss';

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state),
  students: getStudents(state),
});

function mapDispatchToProps(dispatch) {
  return {
    getStudents() {
      dispatch(fetchStudents());
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Students extends Component {
  state = {
    newStudent: false,
  }

  static propTypes = {
    getStudents: PropTypes.func.isRequired,
    students: PropTypes.arrayOf(PropTypes.shape()),
  }

  static defaultProps = {
    students: [],
  }

  componentDidMount() {
    this.props.getStudents();
  }

  get students() {
    return this.props.students.map(student => (
      <ListItem button key={student._id}>
        <ListItemText primary={`${student.name} ${student.lastName}`} />
      </ListItem>
    ));
  }

  handleAddNewStudentClick = () => {
    this.setState({
      newStudent: true,
    });
  }

  handleBackClick = () => {
    this.setState({
      newStudent: false,
    });
  }

  render() {
    const { state } = this;

    if (state.newStudent) {
      return <StudentForm onBackClick={this.handleBackClick} />;
    }

    return (
      <section className={styles.wrapper}>
        <div className={styles.information} />
        <div className={styles.students}>
          <List component="nav">
            { this.students }
          </List>
          <Button aria-label="Add" className={styles.studentsAdd} onClick={this.handleAddNewStudentClick}>
            Добавить студента
            <AddIcon className={styles.iconAdd} />
          </Button>
        </div>
      </section>
    );
  }
}

export { Students };
