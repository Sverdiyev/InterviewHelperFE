import { Button, Grid } from '@mui/material';
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
  marginRight: '0.7rem',
  [':hover']: { backgroundColor: '#fff' }
});

const StyledLogout = styled(StyledButton)({
  color: '#bbb',
  border: '1px solid #bbb',
  marginRight: '0.7rem',
  [':hover']: { backgroundColor: '#fff' }
});

function LogInOut() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = () => navigate('/login');
  const registerHandler = () => navigate('/signup');
  const logoutHandler = () => ctx.logOut();

  return (
    <Grid>
      {ctx.isAuth && <StyledLogout onClick={logoutHandler}> Log out</StyledLogout>}
      {!ctx.isAuth && (
        <>
          <StyledLogin onClick={loginHandler}>Log in</StyledLogin>
          <StyledRegister onClick={registerHandler}>Register</StyledRegister>
        </>
      )}
    </Grid>
  );
}

export default LogInOut;
