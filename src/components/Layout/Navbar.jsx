import { Link } from 'react-router-dom';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#EAEAEA'
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
  display: 'block'
});

const pages = ['main', 'about', 'questions'];

function Navbar() {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledTypography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{ mr: 2, display: 'flex' }}>
            Interview Helper
          </StyledTypography>

          <Grid container sx={{ flex: 1 }}>
            {pages.map((page) => (
              <Link key={page} to={'/' + page} style={{ textDecoration: 'none' }}>
                <StyledButton key={page} sx={{ my: 2 }}>
                  {page}
                </StyledButton>
              </Link>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar;
