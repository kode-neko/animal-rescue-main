import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Outlet,
  Link,
} from 'react-router-dom';
import style from './App.module.scss';
import { setUser } from './common/store';

const App = () => {
  const dispatch = useDispatch();
  dispatch(setUser({
    name: 'test',
    email: 'test@test.com',
    lang: 'es',
    token: 'qwerty',
  }));
  return (
    <div>
      <ul>
        <li><Link to="/test01">Page 01</Link></li>
        <li><Link to="/test02">Page 02</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default App;
