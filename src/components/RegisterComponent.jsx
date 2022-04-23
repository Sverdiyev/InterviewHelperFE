import { Alert, Avatar, Grid, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { emailValidation, nameValidation, passwordValidation } from '../services/validators.js';
import InputField from './Login/InputField.jsx';
import SubmitButton from './StyledUI/SubmitButton.jsx';
import useInputField from '../services/useInputField.js';

function RegisterComponent() {
  const navigate = useNavigate();
  const [successfullRegistration, setSuccessfullRegistration] = useState(null);

  const [emailValue, setEmailValue, emailIsValid, emailIsTouched] = useInputField(emailValidation);
  const [passwordValue, setPasswordValue, passwordIsValid, passwordIsTouched] =
    useInputField(passwordValidation);
  const [firstNameValue, setFirstNameValue, firstNameIsValid, firstNameIsTouched] =
    useInputField(nameValidation);
  const [lastNameValue, setLastNameValue, lastNameIsValid, lastNameIsTouched] =
    useInputField(nameValidation);

  const onChangeEmail = (e) => setEmailValue(e);
  const onChangePassword = (e) => setPasswordValue(e);
  const onChangeFirstName = (e) => setFirstNameValue(e);
  const onChangeLastName = (e) => setLastNameValue(e);

  const formIsValid = emailIsValid && passwordIsValid && lastNameIsValid && firstNameIsValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      setEmailValue();
      setPasswordValue();
      setFirstNameValue();
      setLastNameValue();
      return console.log('invalid form');
    }

    const data = {
      email: emailValue,
      password: passwordValue,
      firstName: firstNameValue,
      lastName: lastNameValue
    };

    //send data to BE
    console.log(data);
    //if success
    setSuccessfullRegistration(true);

    if (successfullRegistration) return navigate('/login');
    setSuccessfullRegistration(false);
  };

  return (
    <>
      {successfullRegistration == false && (
        <Alert
          severity="error"
          onClose={() => setSuccessfullRegistration(null)}
          sx={{ width: '100%', boxSizing: 'border-box' }}>
          Login Failed
        </Alert>
      )}

      <Avatar sx={{ m: 1, backgroundColor: '#bbb' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Grid component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField
              id="firstName"
              label="First Name"
              inputValue={firstNameValue}
              onInputChange={onChangeFirstName}
              error={firstNameIsTouched && !firstNameIsValid}
              autofocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              id="lastName"
              label="Last Name"
              inputValue={lastNameValue}
              onInputChange={onChangeLastName}
              error={lastNameIsTouched && !lastNameIsValid}
              autofocus
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              id="email"
              label="Email"
              inputValue={emailValue}
              onInputChange={onChangeEmail}
              error={emailIsTouched && !emailIsValid}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              id="password"
              label="Password"
              type="password"
              inputValue={passwordValue}
              onInputChange={onChangePassword}
              error={passwordIsTouched && !passwordIsValid}
            />
          </Grid>
        </Grid>
        <SubmitButton
          disabled={
            passwordIsTouched &&
            emailIsTouched &&
            firstNameIsTouched &&
            lastNameIsTouched &&
            !formIsValid
          }>
          Register
        </SubmitButton>
      </Grid>
      <Typography variant="body2" component={Link} to="/login">
        Already have an account? Sign in
      </Typography>
    </>
  );
}

export default RegisterComponent;
