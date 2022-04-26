import { Grid } from '@mui/material';
import RegisterComponent from '../components/Register/RegisterComponent.jsx';

function Register() {
  return (
    <Grid container flexDirection="column" alignItems="center" sx={{ width: '400px' }} mt={8}>
      <RegisterComponent />
    </Grid>
  );
}

export default Register;
