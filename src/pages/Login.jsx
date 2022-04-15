import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const formIsValid = emailIsValid && passwordIsValid;

  const onChangeEmail = (e) => {
    setEmailIsTouched(true);

    const value = e.target.value;
    setEmailValue(value);
    if (!value.length) return setEmailIsValid(false);
    setEmailIsValid(true);
  };
  const onChangePassword = (e) => {
    setPasswordIsTouched(true);

    const value = e.target.value;
    setPasswordValue(value);
    if (!value.length) return setPasswordIsValid(false);
    setPasswordIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailIsTouched(true);
    setPasswordIsTouched(true);

    if (!formIsValid) return;

    const data = { email: emailValue, password: passwordValue };

    console.log('data:', data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Avatar sx={{ m: 1, backgroundColor: '#bbb' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={emailValue}
            onChange={onChangeEmail}
          />
          {emailIsTouched && !emailIsValid && 'PLEASE CORRECT email'}

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordValue}
            onChange={onChangePassword}
          />
          {passwordIsTouched && !passwordIsValid && 'PLEASE CORRECT PASSWORD'}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={passwordIsTouched && emailIsTouched && !formIsValid}
            sx={{ mt: 3, mb: 2, backgroundColor: '#545454' }}>
            Sign In
          </Button>

          <Typography variant="body2" component={Link} to="/signup">
            Don`t have an account? Sign Up
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
