import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

export default function Comment({ commentContent, userName, creationDate }) {
  const formattedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);

  const parsedDate = new Date(Date.parse(creationDate));

  const creationMonth = parsedDate.toLocaleString('default', { month: 'long' });
  const creationDay = parsedDate.getDate();

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={formattedUserName} src="/mock/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={`${formattedUserName} | ${creationDay}-${creationMonth}`}
          secondary={<>{commentContent}</>}
        />
      </ListItem>
    </>
  );
}
