import { Container, Box, Toolbar } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Outlet,
  Link,
} from 'react-router-dom';
import style from './App.module.scss';
import { setUser } from './common/store';
import { AppBar } from './components/AppBar';

const App = () => {
  const dispatch = useDispatch();
  dispatch(setUser({
    name: 'test',
    email: 'test@test.com',
    lang: 'es',
    token: 'qwerty',
  }));
  return (
    <Container maxWidth="lg">
      <AppBar />
      <Box component="main">
        <Toolbar />
        <ul>
          <li><Link to="/test01">Page 01</Link></li>
          <li><Link to="/test02">Page 02</Link></li>
        </ul>
        <Outlet />
      </Box>
    </Container>
  );
};

export default App;
