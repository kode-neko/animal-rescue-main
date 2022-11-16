import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Presentation = () => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2} sx={{ my: 16 }}>
      <Grid item xs={12}>
        <Typography
           component="h1"
           variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {t('welcome')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {t('desc')}
        </Typography>
        </Grid>
    </Grid>
  );
};

export default Presentation;
