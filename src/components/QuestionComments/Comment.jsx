import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

export default function Comment({ commentContent, userName }) {
  const formattedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={formattedUserName} src="/mock/1.jpg" />
        </ListItemAvatar>
        <ListItemText primary={formattedUserName} secondary={<>{commentContent}</>} />
      </ListItem>
    </>
  );
}
