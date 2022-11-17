import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import PetsIcon from '@mui/icons-material/Pets';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { SwitchLang } from '../SwitchLang';

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
        <SwitchLang />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
