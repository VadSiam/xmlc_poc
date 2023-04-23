import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { DropAction } from '../../../types/UserDashboardTypes';


interface NewsCardProps {
  dropAction: DropAction;
  onClick: () => void;
}

const DropActionCard: React.FC<NewsCardProps> = ({ dropAction, onClick }) => {
  return (
    <Card onClick={onClick} >
      <CardMedia
        component="img"
        height="140"
        image={dropAction.imageUrl}
        alt={dropAction.title}
      />
      <CardContent
        sx={{
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5" component="div">
          {dropAction.title}
        </Typography>
        <div>
          read more...
        </div>
      </CardContent>
    </Card>
  );
};

export default DropActionCard;
