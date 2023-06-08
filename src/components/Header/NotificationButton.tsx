import * as React from 'react';
import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

interface NotificationButtonProps {
  onClick: () => void;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ onClick }) => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="back"
      onClick={onClick}
      style={{ margin: '10px' }}

    >
      <Badge badgeContent={3} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationButton;
