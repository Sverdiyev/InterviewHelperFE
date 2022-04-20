import React, { useContext } from 'react';
import { Dialog, Grid } from '@mui/material';
import LoginComponent from './LoginComponent.jsx';
import LoginPopupCtx from '../../store/login-popup-context.js';

function LoginPopup() {
  const { popupIsVisible, hidePopup } = useContext(LoginPopupCtx);

  return (
    <Dialog open={popupIsVisible} onClose={hidePopup}>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        sx={{ width: '400px', padding: '30px 30px 50px', boxSizing: 'border-box' }}>
        <LoginComponent />
      </Grid>
    </Dialog>
  );
}

export default LoginPopup;
