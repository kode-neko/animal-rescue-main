import React from 'react';
import {
  Outlet,
  Link,
} from 'react-router-dom';
import style from './App.module.scss';

const App = () => (
  <div>
    <ul>
      <li><Link to="/test01">Page 01</Link></li>
      <li><Link to="/test02">Page 02</Link></li>
    </ul>
    <Outlet />
  </div>
);

export default App;
