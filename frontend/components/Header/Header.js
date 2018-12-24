import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

import styles from './Header.scss';

export const Header = ({
  loggedIn,
  mentor,
  logout,
}) => (
  <header className={styles.header}>
    <AppBar position="static">
      <Toolbar className={styles.headerInner}>
        <div className={styles.menu}>
          <Button
            variant="contained"
            color="primary"
            className={styles.menuButton}
            component={Link}
            to="/profile"
          >
            profile
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.menuButton}
            component={Link}
            to="/dashboard"
          >
            dashboard
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.menuButton}
            component={Link}
            to="/students"
          >
            students
          </Button>
        </div>

        <p className={styles.userInfo}>
          <AccountCircle />
          <span className={styles.userName}>{mentor.username}</span>
        </p>

        {loggedIn ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  </header>
);

Header.propTypes = {
  loggedIn: PropTypes.bool,
  mentor: PropTypes.shape(),
  logout: PropTypes.func,
};

Header.defaultProps = {
  loggedIn: false,
  mentor: {},
  logout: null,
};
