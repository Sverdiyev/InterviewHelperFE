import { Link } from 'react-router-dom';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';

const pages = ['main', 'about', 'questions'];

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{ mr: 2, display: 'flex', textDecoration: 'none', color: 'white' }}>
            Interview Helper
          </Typography>

          <Grid container sx={{ flex: 1 }}>
            {pages.map((page) => (
              <Link key={page} to={'/' + page} style={{ textDecoration: 'none' }}>
                <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
