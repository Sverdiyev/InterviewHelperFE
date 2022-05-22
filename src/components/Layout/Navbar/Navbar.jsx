import { Link } from 'react-router-dom';
import { AppBar, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import AuthActions from './AuthActions.jsx';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#EAEAEA',
  padding: '10px 20px',
  marginBottom: '10px'
});

const StyledTypography = styled(Typography)({
  color: 'black',
  textDecoration: 'none',
  fontFamily: 'Montserrat'
});

const StyledButton = styled(Button)({
  color: 'black',
  textDecoration: 'none',
  fontFamily: 'Montserrat',
  fontSize: '13px',
  display: 'block',
  margin: 0
});

const pages = { questions: '' };

function Navbar() {
  return (
    <>
      <StyledAppBar position="static">
        <Grid container>
          <StyledTypography variant="h6" noWrap component={Link} to="/" sx={{ mr: 2 }}>
            Interview Helper
          </StyledTypography>

          <Grid container sx={{ flex: 1 }}>
            {Object.keys(pages).map((page) => (
              <Link key={page} to={'/' + pages[page]} style={{ textDecoration: 'none' }}>
                <StyledButton key={page}>{page}</StyledButton>
              </Link>
            ))}
          </Grid>
          <AuthActions />
        </Grid>
      </StyledAppBar>
    </>
  );
}

export default Navbar;
