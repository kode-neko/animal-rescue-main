import { Container, Box, Toolbar } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import style from './App.module.scss';
import { setUser } from './common/store';
import {
  AppBar, Footer, Gallery, Presentation,
} from './components';

const App = () => {
  const dispatch = useDispatch();
  dispatch(setUser({
    name: 'test',
    email: 'test@test.com',
    lang: 'es',
    token: 'qwerty',
  }));
  return (
    <Container maxWidth="md">
      <AppBar />
      <Presentation />
      <Gallery />
      <Footer />
    </Container>
  );
};

export default App;
