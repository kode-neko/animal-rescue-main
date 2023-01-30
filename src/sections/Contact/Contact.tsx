import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { postMail } from '../../common/api';
import { Section } from '../../components';
import { openToast, RootState, setSendingMail } from '../../common/store';

const Contact = () => {
  const { t } = useTranslation();
  const isSendingMail = useSelector((state: RootState) => state.loading.sendingMail);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().max(50).required(),
    mail: yup.string().email().required(),
    content: yup.string().max(500),
  });

  const formik = useFormik({
    initialValues: { name: '', mail: '', content: '' },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(setSendingMail({ sendingMail: true }));
      if (schema.validateSync(values)) {
        postMail(values)
          .then((json) => dispatch(openToast({ type: 'success', msg: 'contact.success' })))
          .catch((err) => dispatch(openToast({ type: 'error', msg: 'contact.error' })))
          .finally(() => dispatch(setSendingMail({ sendingMail: false })));
      }
    },
  });

  return (
    <Section title={'main-title.contact'} desc={'desc.contact'}>
      <Box component="form">
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            id="name"
            disabled={isSendingMail}
            label={t('label.name')}
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && formik.errors.name}
          />
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            id="mail"
            disabled={isSendingMail}
            label={t('label.mail')}
            variant="outlined"
            value={formik.values.mail}
            onChange={formik.handleChange}
            error={formik.touched.mail && !!formik.errors.mail}
            helperText={formik.touched.mail && formik.errors.mail}
          />
          </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            id="content"
            disabled={isSendingMail}
            label={t('label.content')}
            placeholder="Escribe el mensaje"
            rows={6}
            multiline
            value={formik.values.content}
            onChange={formik.handleChange}
            error={formik.touched.content && !!formik.errors.content}
            helperText={formik.touched.content && formik.errors.content}
          />
        </FormControl>
        <Box sx={{ my: 1 }} display="flex" justifyContent="end">
          <LoadingButton
            loading={isSendingMail}
            onClick={() => formik.handleSubmit()}
            variant="contained"
            size="large"
          >{t('label.send')}</LoadingButton>
        </Box>
      </Box>
    </Section>

  );
};

export default Contact;
