import React from 'react';
import PropTypes from 'prop-types';

import { LogIn } from '../LogIn';
import { UsersList } from '../UserLIst';

export const Main = React.memo(
  ({ onSingIn, logInVisibl }) => {

  return (
    <main>
      {logInVisibl ? (
        <LogIn
          onSingIn={onSingIn}
        />
      ) : (
        <div className="list">
          <UsersList />
        </div>
      )}
    </main>
  );
}
);

Main.propTypes = {
  onSingIn: PropTypes.func.isRequired,
  logInVisibl: PropTypes.bool.isRequired,
};
