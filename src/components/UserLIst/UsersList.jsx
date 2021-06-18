import React, {
  useCallback,
  useEffect,
  useMemo,
  useState } from 'react';
import PropTypes from 'prop-types';
import clNames from 'classnames';

import './UserList.scss';

import { getUsers } from '../../api/users';
import { PostList } from '../PostList';

export const UsersList = React.memo(
  ({}) => {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState('');
    const [userId, setUserId] = useState(0)

    useEffect(() => {
      getUsers().then(setUsers);
    }, []);

    const visibileUsers = users.filter(
        user => user.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleInput = (target) => {
      setQuery(target.value);
    };

    const clear = () => {
      setQuery('');
    };

    const handleUserId = (userId) => {
      setUserId(userId);
    };

    return (
      <div className="users">
        <div>
          <input
            type="text"
            className="users__search"
            placeholder="Search user"
            value={query}
            onChange={({target}) => handleInput(target)}
          />
          <button
            className="users__buuton"
            onClick={clear}
          >
            Clear
          </button>
          <ul className="users__list">
            {users.length !== 0 ? (
              visibileUsers.map(user => (
                <li key={user.id} className="users__item">
                  <span className="users__name">
                    {user.name}
                  </span>
                  <span className="users__email">
                    {user.email}
                  </span>
                  <button
                    className={clNames("users__choose", {
                      "users__choose--active": userId === user.id,
                    })}
                    onClick={() => {
                      if (user.id !== userId) {
                        handleUserId(user.id)
                      } else {
                        setUserId(0)
                      }
                    }}
                  >
                    Choose a user
                  </button>
                  <span className="users__phone">
                    {user.phone}
                  </span>
                </li>
              ))
            ) : (
              <span className="louding">
                Louding...
              </span>
            )}
          </ul>
          </div>
          <div>
            <PostList userId={userId}/>
          </div>
      </div>
    );
  }
);
