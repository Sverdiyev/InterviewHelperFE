import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

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

function LogInOut({ type }) {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('/login');
  };
  // const logoutHandler = () => {};
  // const registerHandler = () => {};
  console.log(type);

  return (
    <Grid>
      <StyledLogin onClick={loginHandler}>Log in</StyledLogin>
      <StyledRegister>Register</StyledRegister>
    </Grid>
  );
}

export default LogInOut;
