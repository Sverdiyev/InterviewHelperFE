import { Alert } from '@mui/material';

function Alerts({ success, setSuccess, failLabel, successLabel }) {
  return (
    <>
      {success == false && (
        <Alert
          severity="error"
          onClose={() => setSuccess(null)}
          sx={{ width: '100%', boxSizing: 'border-box' }}>
          {failLabel}
        </Alert>
      )}
      {success && (
        <Alert
          severity="success"
          onClose={() => setSuccess(null)}
          sx={{ width: '100%', boxSizing: 'border-box' }}>
          {successLabel}
        </Alert>
      )}
    </>
  );
}

export default Alerts;
