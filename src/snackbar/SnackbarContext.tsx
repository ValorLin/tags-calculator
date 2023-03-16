import { AlertProps } from '@mui/material';
import React from 'react';

export type SnackbarOptions = {
  message: string;
  severity: AlertProps['severity'];
};

export type SnackbarContextValue = {
  show: (options: SnackbarOptions) => void;
  dismiss: (reason?: string) => void;
};

export const SnackbarContext = React.createContext<SnackbarContextValue>({
  show: () => {},
  dismiss: () => {},
});
