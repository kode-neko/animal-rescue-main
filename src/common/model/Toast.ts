import { AlertColor } from '@mui/material';

interface Toast {
  open: boolean;
  type?: AlertColor;
  msg: string;
}

export default Toast;
