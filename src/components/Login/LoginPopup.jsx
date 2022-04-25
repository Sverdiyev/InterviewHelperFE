import React from 'react';
import { Dialog, Grid } from '@mui/material';
import LoginComponent from './LoginComponent.jsx';

function LoginPopup({ popupIsVisible, setPopupIsVisible }) {
  return (
    <Dialog open={popupIsVisible} onClose={() => setPopupIsVisible(false)}>
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
