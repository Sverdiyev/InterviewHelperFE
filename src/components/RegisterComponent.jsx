import { Alert, Avatar, Grid, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { emailValidation, nameValidation, passwordValidation } from '../services/validators.js';
import InputField from './StyledUI/InputField.jsx';
import SubmitButton from './StyledUI/SubmitButton.jsx';
import useInputField from '../services/useInputField.js';

function RegisterComponent() {
  const navigate = useNavigate();
  const [successfullRegistration, setSuccessfullRegistration] = useState(null);

  const [emailValue, setEmailValue, emailIsValid] = useInputField(emailValidation);
  const [passwordValue, setPasswordValue, passwordIsValid] = useInputField(passwordValidation);
  const [firstNameValue, setFirstNameValue, firstNameIsValid] = useInputField(nameValidation);
  const [lastNameValue, setLastNameValue, lastNameIsValid] = useInputField(nameValidation);

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
      return;
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
              error={firstNameIsValid === false}
              autofocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              id="lastName"
              label="Last Name"
              inputValue={lastNameValue}
              onInputChange={onChangeLastName}
              error={lastNameIsValid === false}
              autofocus
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              id="email"
              label="Email"
              inputValue={emailValue}
              onInputChange={onChangeEmail}
              error={emailIsValid === false}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              id="password"
              label="Password"
              type="password"
              inputValue={passwordValue}
              onInputChange={onChangePassword}
              error={passwordIsValid === false}
            />
          </Grid>
        </Grid>
        <SubmitButton disabled={!formIsValid}>Register</SubmitButton>
      </Grid>
      <Typography variant="body2" component={Link} to="/login">
        Already have an account? Sign in
      </Typography>
    </>
  );
}

export default RegisterComponent;
