import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import useInputField from '../../services/useInputField.js';
import { emailValidation, nameValidation, passwordValidation } from '../../services/validators.js';
import AuthContext from '../../store/auth-context.js';
import InputField from '../StyledUI/InputField.jsx';
import SubmitButton from '../StyledUI/SubmitButton.jsx';

function RegisterForm({ setSuccessfullRegistration }) {
  const authCtx = useContext(AuthContext);
  const onChangeEmail = (e) => setEmailValue(e);
  const onChangePassword = (e) => setPasswordValue(e);
  const onChangeFirstName = (e) => setFirstNameValue(e);
  const onChangeLastName = (e) => setLastNameValue(e);

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
      name: firstNameValue
      // firstName: firstNameValue,
      // lastName: lastNameValue
    };

    const res = authCtx.register(data);
    setSuccessfullRegistration(res);
  };

  const [emailValue, setEmailValue, emailIsValid] = useInputField({
    validationCb: emailValidation
  });
  const [passwordValue, setPasswordValue, passwordIsValid] = useInputField({
    validationCb: passwordValidation
  });
  const [firstNameValue, setFirstNameValue, firstNameIsValid] = useInputField({
    validationCb: nameValidation
  });
  const [lastNameValue, setLastNameValue, lastNameIsValid] = useInputField({
    validationCb: nameValidation
  });

  const formIsValid = emailIsValid && passwordIsValid && lastNameIsValid && firstNameIsValid;

  return (
    <Grid component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputField
            id="firstName"
            label="First Name"
            inputValue={firstNameValue}
            onInputChange={onChangeFirstName}
            error={firstNameIsValid === false}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            id="lastName"
            label="Last Name"
            inputValue={lastNameValue}
            onInputChange={onChangeLastName}
            error={lastNameIsValid === false}
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
  );
}

export default RegisterForm;
