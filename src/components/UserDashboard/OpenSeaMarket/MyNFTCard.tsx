import React from 'react';
import { CardContent, Typography, Paper, Box, styled } from '@mui/material';
import { NFT } from '../../../types/UserDashboardTypes';
import { Link } from 'react-router-dom';

interface NFTCardProps {
  nft: NFT;
}

const StyledImage = styled('img')({
  width: '100%',
  maxHeight: '70px',
  objectFit: 'scale-down',
});

const MyNFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <Box>
      <Paper>
        <Box p={2} >
          <Link to={`/nft/${nft.id}`} style={{ textDecoration: 'none' }}>
            <StyledImage src={nft.imageUrl} alt={nft.name} />
            <Typography variant="h6">{nft.name}</Typography>
            <Typography variant="body1">
              Price: {nft.price} XMLC
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default MyNFTCard;
