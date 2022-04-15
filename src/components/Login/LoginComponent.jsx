import { Alert, Avatar, Button, Grid, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context.js';
import InputField from './InputField.jsx';

function LoginComponent() {
  const ctx = useContext(AuthContext);

  const [successfullLogin, setSuccessfullLogin] = useState(null);
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

    console.log(data);

    //send data to BE
    //fetch name from BE
    const name = { firstName: 'Sasha', lastName: 'Verdiyev' };
    //if valid, login
    ctx.logIn(name);
    //if not, display message
    setSuccessfullLogin(false);
  };

  return (
    <>
      {successfullLogin == false && (
        <Alert
          severity="error"
          onClose={() => setSuccessfullLogin(null)}
          sx={{ width: '100%', boxSizing: 'border-box' }}>
          Login Failed
        </Alert>
      )}
      <Avatar sx={{ m: 1, backgroundColor: '#bbb' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <Grid item component="form" onSubmit={handleSubmit} noValidate>
        <InputField
          id="email"
          inputValue={emailValue}
          onInputChange={onChangeEmail}
          autoFocus
          error={emailIsTouched && !emailIsValid}
        />

        <InputField
          id="password"
          inputValue={passwordValue}
          onInputChange={onChangePassword}
          error={passwordIsTouched && !passwordIsValid}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={passwordIsTouched && emailIsTouched && !formIsValid}
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: '#6e6e6e',
            [':hover']: { backgroundColor: '#545454' }
          }}>
          Log In
        </Button>

        <Typography variant="body2" component={Link} to="/signup">
          Don`t have an account? Register
        </Typography>
      </Grid>
    </>
  );
}

export default LoginComponent;
