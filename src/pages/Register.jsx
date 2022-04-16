import { Alert, Avatar, Grid, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import useInputField, {
  emailValidation,
  nameValidation,
  passwordValidation
} from '../services/helpers.js';
import InputField from '../components/Login/InputField.jsx';
import SubmitButton from '../components/StyledUI/SubmitButton.jsx';
import { useState } from 'react';

function Register() {
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
    <Grid container flexDirection="column" alignItems="center" sx={{ width: '400px' }} mt={8}>
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
              inputValue={firstNameValue}
              onInputChange={onChangeFirstName}
              error={firstNameIsTouched && !firstNameIsValid}
              autofocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              id="lastName"
              inputValue={lastNameValue}
              onInputChange={onChangeLastName}
              error={lastNameIsTouched && !lastNameIsValid}
              autofocus
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              id="email"
              inputValue={emailValue}
              onInputChange={onChangeEmail}
              error={emailIsTouched && !emailIsValid}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              id="password"
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
    </Grid>
  );
}

export default Register;
