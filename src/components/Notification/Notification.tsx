import React from 'react';
import {
  Snackbar,
  Alert,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { closeToast, RootState } from '../../common/store';

const Notification = () => {
  const toast = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleClose = () => dispatch(closeToast());
  return (
    <Snackbar
      open={toast.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={toast.type} sx={{ width: '100%' }}>
        {t(toast.msg)}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
