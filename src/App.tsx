import React, { useEffect, useMemo } from 'react';
import {
  Container, Box, createTheme, CssBaseline,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { ThemeMode } from './common/model';
import { RootState, setUser, store } from './common/store';
import { parseLang } from './common/utils';
import {
  AppBar,
  Footer,
  Notification,
} from './components';
import { Contact, Presentation, Projects } from './sections';

const App = () => {
  const mode = useSelector((state: RootState) => state.user.theme);
  const theme = useMemo(
    () => (createTheme({
      palette: {
        mode: mode === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT,
      },
    })),
    [mode],
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser({
      name: 'test',
      email: 'test@test.com',
      lang: parseLang(navigator.language),
      token: 'qwerty',
      theme: ThemeMode.DARK,
    }));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <AppBar />
        <Box minHeight={100}/>
        <Presentation />
        <Projects />
        <Contact />
        <Footer />
        <Notification />
      </Container>
    </ThemeProvider>
  );
};

export default App;
