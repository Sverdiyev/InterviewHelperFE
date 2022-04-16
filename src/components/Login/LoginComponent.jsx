import { Alert, Avatar, Button, Grid, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context.js';
import InputField from './InputField.jsx';
import useInputField from '../../services/helpers.js';

function LoginComponent() {
  const ctx = useContext(AuthContext);

  const validationCb = (value) => !value.length;
  const [successfullLogin, setSuccessfullLogin] = useState(null);
  const [emailValue, setEmailValue, emailIsValid, emailIsTouched] = useInputField(validationCb);
  const [passwordValue, setPasswordValue, passwordIsValid, passwordIsTouched] =
    useInputField(validationCb);

  const formIsValid = emailIsValid && passwordIsValid;

  const onChangeEmail = (e) => setEmailValue(e);
  const onChangePassword = (e) => setPasswordValue(e);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      setEmailValue();
      setPasswordValue();
      return console.log('invalid form');
    }

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
