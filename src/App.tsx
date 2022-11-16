import { Container, Box, Toolbar } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './common/store';
import {
  AppBar, Footer,
} from './components';
import { Contact, Presentation, Projects } from './sections';

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
      <Box minHeight={100}/>
      <Presentation />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
};

export default App;
