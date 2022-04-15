import { Avatar, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context.js';

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

function AuthActions() {
  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const loginHandler = () => ctx.togglePopup();
  const registerHandler = () => navigate('/signup');
  const logoutHandler = () => ctx.logOut();

  return (
    <Grid container xs={3} gap="8px" justifyContent="flex-end">
      {ctx.isAuth && (
        <>
          <StyledLogout onClick={logoutHandler}> Log out</StyledLogout>
          <Avatar>{ctx.name.firstName[0] + ctx.name.lastName[0]}</Avatar>
        </>
      )}
      {!ctx.isAuth && (
        <>
          <StyledLogin onClick={loginHandler}>Log in</StyledLogin>
          <StyledRegister onClick={registerHandler}>Register</StyledRegister>
        </>
      )}
    </Grid>
  );
}

export default AuthActions;
