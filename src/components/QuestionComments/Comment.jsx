import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Comment({ commentContent, userName }) {
  const formattedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={formattedUserName} src="/mock/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={formattedUserName}
          secondary={<React.Fragment>{commentContent}</React.Fragment>}
        />
      </ListItem>
    </>
  );
}
