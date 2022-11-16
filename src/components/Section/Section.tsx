import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

type SectionProps = {
  title: string;
  desc: string;
  children?: JSX.Element;
}

const Section = ({ title, desc, children }: SectionProps) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mb: 8 }}>
      <Typography component="h1" variant='h3' sx={{ mb: 1 }}>{ t(title) }</Typography>
      <Typography paragraph textAlign="justify" sx={{ mb: 4 }}>{ t(desc) }</Typography>
        {children}
    </Box>
  );
};

export default Section;
