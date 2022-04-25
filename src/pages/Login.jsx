import { Grid } from '@mui/material';
import LoginComponent from '../components/Login/LoginComponent.jsx';

function Login() {
  return (
    <Grid container flexDirection="column" alignItems="center" sx={{ width: '400px' }} mt={8}>
      <LoginComponent />
    </Grid>
  );
}

export default Login;
