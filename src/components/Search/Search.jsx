import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import AdvancedSearch from './AdvancedSearch.jsx';

import BasicSearch from './BasicSearch.jsx';

function Search() {
  const [advSearchIsOpen, setAdvSearchIsOpen] = useState(false);
  return (
    <Grid container sx={{ width: '60%' }} alignItems="center">
      <Grid item xs={8}>
        <BasicSearch />
      </Grid>
      <Grid item xs={4} sx={{ pt: 1 }}>
        <Button variant="outlined" onClick={() => setAdvSearchIsOpen((prevState) => !prevState)}>
          Advanced Search
        </Button>
      </Grid>
      {advSearchIsOpen && (
        <Grid item xs={12}>
          <AdvancedSearch />
        </Grid>
      )}
    </Grid>
  );
}

export default Search;
