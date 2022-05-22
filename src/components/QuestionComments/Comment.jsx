import React from 'react';
import { Avatar, Card, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  textAlign: 'left',
  marginBottom: '8px',
  padding: '3px 0 3px 10px',
  boxShadow: 'none'
});

export default function Comment({ commentContent, userName, creationDate }) {
  const formattedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);

  const parsedDate = new Date(Date.parse(creationDate));

  const creationTimestamp = parsedDate.toLocaleString('default', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'Poland'
  });

  return (
    <>
      <Grid container component={StyledCard}>
        <Grid item xs={2}>
          <Avatar alt={formattedUserName} src="/mock/1.jpg" />
        </Grid>
        <Grid item xs={10} container>
          <Grid container item justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body1">{formattedUserName}</Typography>
            </Grid>
            <Grid item>
              <Typography noWrap sx={{ fontSize: '0.8rem', color: '#6f6f6f' }}>
                {creationTimestamp}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ color: '#6f6f6f' }}>
              {commentContent}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
