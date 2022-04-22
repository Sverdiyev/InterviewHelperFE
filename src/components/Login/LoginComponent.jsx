import { Alert, Avatar, Grid, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context.js';
import InputField from './InputField.jsx';
import SubmitButton from '../StyledUI/SubmitButton.jsx';
import useInputField from '../../services/helpers.js';
import { emailValidation, passwordValidation } from '../../services/validators.js';
import LoginPopupCtx from '../../store/login-popup-context.js';

function LoginComponent() {
  const authCtx = useContext(AuthContext);
  const loginPopupCtx = useContext(LoginPopupCtx);

  const [successfullLogin, setSuccessfullLogin] = useState(null);
  const [emailValue, setEmailValue, emailIsValid, emailIsTouched] = useInputField(emailValidation);
  const [passwordValue, setPasswordValue, passwordIsValid, passwordIsTouched] =
    useInputField(passwordValidation);

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

    authCtx.logIn(name);
    loginPopupCtx.hidePopup();
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
          label="email"
          id="email"
          inputValue={emailValue}
          onInputChange={onChangeEmail}
          autoFocus
          error={emailIsTouched && !emailIsValid}
        />

        <InputField
          label="password"
          id="password"
          type="password"
          inputValue={passwordValue}
          onInputChange={onChangePassword}
          error={passwordIsTouched && !passwordIsValid}
        />

        <SubmitButton disabled={(passwordIsTouched || emailIsTouched) && !formIsValid}>
          Log In
        </SubmitButton>
      </Grid>
      <Typography variant="body2" component={Link} to="/signup">
        Don`t have an account? Register
      </Typography>
    </>
  );
}

export default LoginComponent;
