import * as React from 'react';
import {
  AppBar, Box, Typography, Toolbar,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useTranslation } from 'react-i18next';
import { SwitchLang } from '../SwitchLang';
import { SwitchTheme } from '../SwitchTheme';

const AppBarCustom = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <PetsIcon sx={{ mr: 2 }} />
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          {t('title.long')}
        </Typography>
        <Box
          display="flex"
          sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
          <SwitchTheme />
          <SwitchLang />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
