import React from 'react';
import { Typography, Box, Chip, Card, CardContent, CardMedia } from '@mui/material';
import { NFT } from '../../../types/UserDashboardTypes';

interface NFTCardProps {
  nft: NFT;
}

const MyNFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h6">{nft.name}</Typography>
          <br />
          <Typography variant="subtitle1" >
            <Chip
              label={`${nft.price} $XMLC`}
              color="success"
              variant="outlined"
            />
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '50%' }}
        image={nft.imageUrl}
        alt={nft.name}
      />
    </Card>
  );
};

export default MyNFTCard;
