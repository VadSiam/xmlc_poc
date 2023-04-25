import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { nfts } from '../../../mocks/mockNFT';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/slices/selectors';
import { NFT } from '../../../types/UserDashboardTypes';


const StyledImage = styled('img')({
  width: '100%',
  maxHeight: '90%',
  objectFit: 'cover',
});

const NFTDetails: React.FC = () => {
  const { nftId } = useParams<{ nftId: string }>();
  const nft = nfts.find((item) => item.id === nftId);

  if (!nft) {
    return <Typography variant="h5">NFT not found</Typography>;
  }

  return (
    <NFTDetailsBody nft={nft} />
  );
};

export default NFTDetails;

export const NFTDetailsBody = ({ nft, simple }: { nft?: NFT, simple?: boolean }) => {
  const { name } = useSelector(selectUser) ?? {};
  const isThisOwner = simple ? false : nft?.owner === name;

  if (!nft) {
    return <Typography variant="h5">NFT not found</Typography>;
  }

  return (
    <Box
      sx={{
        width: '80%',
        maxWidth: '500px',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 1,
        margin: 'auto',
        marginTop: '10%',
      }}
    >
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
  )
}
