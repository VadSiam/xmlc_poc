import React from 'react';
import { CardContent, Typography, Paper, Box, styled } from '@mui/material';
import { NFT } from '../../../types/UserDashboardTypes';
import { Link } from 'react-router-dom';

interface NFTCardProps {
  nft: NFT;
}

const StyledImage = styled('img')({
  width: '100%',
  maxHeight: '200px',
  objectFit: 'cover',
});

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <Box>
      <Paper>
        <Box p={2} >
          <Link to={`/nft/${nft.id}`} style={{ textDecoration: 'none' }}>
            <Typography variant="h6">{nft.name}</Typography>
            <StyledImage src={nft.imageUrl} alt={nft.name} />
            <CardContent style={{ height: '150px' }}>
              <Typography variant="h5" component="div">
                {nft.name}
              </Typography>
              <Typography variant="body2">
                {nft.description}
              </Typography>
              <Typography variant="body1">
                Price: {nft.price} XMLC
              </Typography>
            </CardContent>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default NFTCard;
