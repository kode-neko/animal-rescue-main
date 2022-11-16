import React, { useEffect } from 'react';
import {
  Container,
  Box,
  Toolbar,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { postMail } from '../../common/api';
import { Section } from '../../components';

const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => {
    postMail()
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Section title={'title.contact'} desc={'desc.contact'}>
      <Box component="form">
        <TextField id="name" label="Outlined" variant="outlined" />
        <TextField id="mail" label="Outlined" variant="outlined" />
        <TextField
            id="body"
            placeholder="Escribe el mensaje"
            multiline
          />
        <Button variant="contained">{t('label.send')}</Button>
      </Box>
    </Section>

  );
};

export default Contact;
