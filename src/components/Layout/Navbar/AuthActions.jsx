import { Avatar, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../store/auth-context.js';

const StyledButton = styled(Button)({
  padding: '0.25rem 1rem',
  textTransform: 'none'
});

const StyledRegister = styled(StyledButton)({
  backgroundColor: '#bbb',
  color: '#fff',
  boxShadow: '0 2px 5px #9c9999',
  [':hover']: { backgroundColor: '#999' }
});

const StyledLogin = styled(StyledButton)({
  color: '#bbb',
  border: '1px solid #bbb',
  [':hover']: { backgroundColor: '#fff' }
});

const StyledLogout = styled(StyledButton)({
  color: '#bbb',
  border: '1px solid #bbb',
  [':hover']: { backgroundColor: '#fff' }
});

function AuthActions({ setPopupIsVisible }) {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const loginHandler = () => setPopupIsVisible(true);
  const registerHandler = () => navigate('/signup');
  const logoutHandler = () => authCtx.logOut();

  return (
    <Grid container gap="10px" justifyContent="center" sx={{ width: '180px' }}>
      {authCtx.isAuth && (
        <>
          <StyledLogout onClick={logoutHandler}> Log out</StyledLogout>
          <Avatar>{authCtx.name.firstName[0] + authCtx.name.lastName[0]}</Avatar>
        </>
      )}
      {!authCtx.isAuth && (
        <>
          <StyledLogin onClick={loginHandler}>Log in</StyledLogin>
          <StyledRegister onClick={registerHandler}>Register</StyledRegister>
        </>
      )}
    </Grid>
  );
}

export default AuthActions;
