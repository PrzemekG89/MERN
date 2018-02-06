import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Nav.css';

const Nav = (props, context) => {
  return (
    <div className={styles['navbar']}>
      <span><Link to='/home'><FormattedMessage id='home' /></Link></span>
      <span><Link to='/'><FormattedMessage id='posts' /></Link></span>
      <span><Link to='/about'><FormattedMessage id='about' /></Link></span>
    </div>
  );
}

Nav.propTypes = {
};

export default Nav;