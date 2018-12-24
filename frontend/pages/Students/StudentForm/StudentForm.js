import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './StudentForm.scss';

export const StudentForm = ({
  handleSave,
  handleChange,
  name,
  email,
  onBackClick,
}) => (
  <form noValidate autoComplete="off" className={styles.form} onSubmit={handleSave}>
    <div className={styles.formContainer}>
      <FormControl className={styles.formControl}>
        <InputLabel htmlFor="component-simple">name</InputLabel>
        <Input
          value={name}
          name="name"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl className={styles.formControl}>
        <InputLabel htmlFor="component-simple">Email</InputLabel>
        <Input
          value={email}
          name="email"
          onChange={handleChange}
        />
      </FormControl>
    </div>


    <div className={styles.buttons}>
      <Button variant="contained" color="primary" type="submit">
          Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={onBackClick}
      >
          Back
      </Button>
    </div>
  </form>
);

StudentForm.propTypes = {
  handleSave: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  onBackClick: PropTypes.func.isRequired,
};

StudentForm.defaultProps = {
  name: '',
  email: '',
};
