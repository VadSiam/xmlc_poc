// src/components/UserDashboard/OpenSeaMarket/NFTDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { nfts } from '../../../mocks/mockNFT';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/slices/selectors';


const StyledImage = styled('img')({
  width: '100%',
  maxHeight: '90%',
  objectFit: 'cover',
});

const NFTDetails: React.FC = () => {
  const { name } = useSelector(selectUser) ?? {};
  const { nftId } = useParams<{ nftId: string }>();
  const nft = nfts.find((item) => item.id === nftId);
  const isThisOwner = nft?.owner === name;

  if (!nft) {
    return <Typography variant="h5">NFT not found</Typography>;
  }

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Typography variant="h5">{nft.name}</Typography>
          <StyledImage src={nft.imageUrl} alt={nft.name} />
          <Typography variant="subtitle1">Description: {nft.description}</Typography>
          <Typography variant="subtitle1">Owner: {nft.owner}</Typography>
          <Typography variant="subtitle1">Price: {nft.price} XMLC</Typography>
          {!isThisOwner && (
            <Box mt={2}>
              <Button variant="contained" color="primary">
                Buy NFT
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default NFTDetails;
