import React from 'react';
import { Card, CardContent, Typography, CardMedia, Avatar } from '@mui/material';
import { DropAction } from '../../../types/UserDashboardTypes';
import { selectTokens } from '../../../app/slices/selectors';
import { useSelector } from 'react-redux';


interface NewsCardProps {
  dropAction: DropAction;
  onClick: () => void;
}

const DropActionCard: React.FC<NewsCardProps> = ({ dropAction, onClick }) => {
  const { title, imageUrl, id } = dropAction;
  const whichToken = id.includes('adds')
    ? 'adds'
    : id.includes('prda')
      ? 'prda' : 'gucc';
  const tokens = useSelector(selectTokens);
  const tokenImg = tokens.find((token) => token.symbol.toLowerCase() === whichToken)?.imageUrl;

  return (
    <Card onClick={onClick} >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent
        sx={{
          minHeight: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar src={tokenImg} sx={{ width: 40, height: 40, marginRight: 1 }} />
          {title}
        </Typography>
        <div>
          read more...
        </div>
      </CardContent>
    </Card>
  );
};

export default DropActionCard;
