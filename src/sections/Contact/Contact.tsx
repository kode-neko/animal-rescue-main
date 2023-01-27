import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { postMail } from '../../common/api';
import { Section } from '../../components';
import { Mail } from '../../common/model';
import { openToast, RootState } from '../../common/store';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState<Mail>({ name: '', mail: '', msj: '' });
  const isSendingMail = useSelector((state: RootState) => state.loading.sendingMail);
  const dispatch = useDispatch();

  const handleClick = () => {
    postMail()
      .then((json) => dispatch(openToast({ type: 'success', msg: 'contact.success' })))
      .catch((err) => dispatch(openToast({ type: 'error', msg: 'contact.error' })));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const name = e.target.id;
    setForm({ ...form, [name]: val });
  };

  return (
    <Section title={'title.contact'} desc={'desc.contact'}>
      <Box component="form">
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            id="name"
            disabled={isSendingMail}
            label={t('label.name')}
            variant="outlined"
            value={form.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            id="mail"
            disabled={isSendingMail}
            label={t('label.mail')}
            variant="outlined"
            value={form.mail}
            onChange={handleChange}
          />
          </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            id="body"
            disabled={isSendingMail}
            label={t('label.msj')}
            placeholder="Escribe el mensaje"
            rows={6}
            multiline
            value={form.msj}
            onChange={handleChange}
          />
        </FormControl>
        <Box sx={{ my: 1 }} display="flex" justifyContent="end">
          <LoadingButton
            loading={isSendingMail}
            onClick={handleClick}
            variant="contained"
            size="large"
          >{t('label.send')}</LoadingButton>
        </Box>
      </Box>
    </Section>

  );
};

export default Contact;
