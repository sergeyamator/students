import React from 'react';
import { Button } from '../Button';
import styles from './Header.scss';

export const Header = () => {
  console.log(styles)
  return (
    <header className={styles.header}>
      hi
    </header>
  );
};
