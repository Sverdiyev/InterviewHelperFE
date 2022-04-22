import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledButton = styled(Button)({
  marginTop: '1.5rem',
  marginBottom: '1rem',
  backgroundColor: '#6e6e6e',
  [':hover']: { backgroundColor: '#545454' }
});

function SubmitButton({ children, disabled }) {
  return (
    <StyledButton type="submit" fullWidth variant="contained" disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default SubmitButton;
