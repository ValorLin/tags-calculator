import { Alert, Snackbar } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { SnackbarContext, SnackbarOptions } from './SnackbarContext';

export const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<SnackbarOptions['severity']>('success');
  const autoHideDuration = 3000;

  const show = useCallback(({ message, severity }: SnackbarOptions) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  }, []);

  const dismiss = useCallback((reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  }, []);

  const contextValue = useMemo(() => ({ dismiss, show }), [show, dismiss]);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        message={message}
        onClose={(event, reason) => dismiss(reason)}
      >
        <Alert severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
