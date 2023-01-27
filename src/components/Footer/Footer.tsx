import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
        <Box sx={{ p: 6 }} component="footer">
            <Typography variant="body2" color="text.secondary" align="center">
                {t('credentials')}
            </Typography>
        </Box>
  );
};
export default Footer;
