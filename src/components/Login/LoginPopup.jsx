import React, { useContext } from 'react';
import { Dialog, Grid } from '@mui/material';
import AuthContext from '../../store/auth-context.js';
import LoginComponent from './LoginComponent.jsx';

function LoginPopup() {
  const { popupIsVisible, togglePopup } = useContext(AuthContext);

  return (
    <Dialog open={popupIsVisible} onClose={togglePopup}>
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
