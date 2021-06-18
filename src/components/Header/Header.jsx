import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

export const Header = React.memo(
  ({ onChangeHeader, logInChange }) => {

    return (
      <header className='header'>
        <span className='header__welcom'>
          Welcom
        </span>
  
        {logInChange ? (
          null
        ) : (
          <span
            className="header__signOut"
            onClick={() => onChangeHeader()}
          >
            Sign out
          </span>
        )}
      </header>
    )
  }
)

Header.propTypes = {
  onChangeHeader: PropTypes.func.isRequired,
  logInChange: PropTypes.bool.isRequired,
}
