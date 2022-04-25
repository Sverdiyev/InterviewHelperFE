import { Alert, Avatar, Typography } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm.jsx';
import { useState } from 'react';

function RegisterComponent() {
  const [successfullRegistration, setSuccessfullRegistration] = useState(null);

  return (
    <>
      {successfullRegistration == false && (
        <Alert
          severity="error"
          onClose={() => setSuccessfullRegistration(null)}
          sx={{ width: '100%', boxSizing: 'border-box' }}>
          Registration Failed
        </Alert>
      )}

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
