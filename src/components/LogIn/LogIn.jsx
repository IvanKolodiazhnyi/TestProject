import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LogIn.scss';

export const LogIn = React.memo(
  ({ onSingIn }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState();

    return (
      <>
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            onSingIn(name, +password);
          }}
        >
          <input
            type="text"
            className="form__text"
            placeholder="User name: ivan"
            value={name}
            onChange={({ target }) => {
              setName(target.value)
            }}
            required
          />

          <input
            type="password"
            className="form__password"
            placeholder="Password: 1111"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value)
            }}
            required
          />
          <button
            type="submit"
            className="form__submit"
          >
            Sing in
          </button>
        </form>
      </>
    );
  }
);

LogIn.propTypes = {
  onSingIn: PropTypes.func.isRequired,
}
