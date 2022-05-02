import { Avatar, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm.jsx';
import { useState } from 'react';
import Alerts from '../StyledUI/Alerts.jsx';

function RegisterComponent() {
  const [successfullRegistration, setSuccessfullRegistration] = useState(null);

  return (
    <>
      <Alerts
        failLabel="Registration Failed"
        successLabel="Registered"
        success={successfullRegistration}
        setSuccess={setSuccessfullRegistration}
      />

      <Avatar sx={{ m: 1, backgroundColor: '#bbb' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <RegisterForm setSuccessfullRegistration={setSuccessfullRegistration} />
      <Typography variant="body2" component={Link} to="/login">
        Already have an account? Sign in
      </Typography>
    </>
  );
}

export default RegisterComponent;
