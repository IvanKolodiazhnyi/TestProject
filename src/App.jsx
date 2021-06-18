import React, {useCallback, useState} from 'react';

import './App.scss';

import { Header } from './components/Header';
import { Main} from './components/Main';

const App = () => {
  const [logInVisibl, setLogInVisibl] = useState(true);

  const onSingIn = useCallback((UserName, password) => {
    if (UserName === 'ivan' && password === 1111) {
      setLogInVisibl(false);
    };
  });

  const handleHeader = useCallback(() => {
    setLogInVisibl(true);
  });

  return (
    <div className="container">
      <Header
        onChangeHeader={handleHeader}
        logInChange={logInVisibl}
      />

      <Main
        logInVisibl={logInVisibl}
        onSingIn={onSingIn}
      />
    </div>
  )
};

export default App;
