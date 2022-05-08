import { Avatar, Grid, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context.js';
import InputField from '../StyledUI/InputField.jsx';
import SubmitButton from '../StyledUI/SubmitButton.jsx';
import useInputField from '../../services/useInputField.js';
import { emailValidation, passwordValidation } from '../../services/validators.js';
import Alerts from '../StyledUI/Alerts.jsx';

function LoginComponent({ setPopupIsVisible = () => null }) {
  const authCtx = useContext(AuthContext);

  const [successfullLogin, setSuccessfullLogin] = useState(null);
  const [emailValue, setEmailValue, emailIsValid] = useInputField({
    validationCb: emailValidation
  });
  const [passwordValue, setPasswordValue, passwordIsValid] = useInputField({
    validationCb: passwordValidation
  });

  const formIsValid = emailIsValid && passwordIsValid;

  const onChangeEmail = (e) => setEmailValue(e);
  const onChangePassword = (e) => setPasswordValue(e);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      setEmailValue();
      setPasswordValue();
      return;
    }

    const data = { email: emailValue, password: passwordValue };

    authCtx.logIn(data);
    setSuccessfullLogin(authCtx.isAuth);
  };

  return (
    <>
      <Alerts
        failLabel="Login Failed"
        successLabel="Logged in"
        success={successfullLogin}
        setSuccess={setSuccessfullLogin}
      />
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
          error={emailIsValid === false}
        />

        <InputField
          label="password"
          id="password"
          type="password"
          inputValue={passwordValue}
          onInputChange={onChangePassword}
          error={passwordIsValid === false}
        />

        <SubmitButton disabled={!formIsValid}>Log In</SubmitButton>
      </Grid>
      <Typography
        variant="body2"
        component={Link}
        to="/signup"
        onClick={() => setPopupIsVisible(false)}>
        Don`t have an account? Register
      </Typography>
    </>
  );
}

export default LoginComponent;
