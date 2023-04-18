import React from 'react';
import { Grid } from '@mui/material';
import NFTCard from './NFTCard';
import { StyledBlockContainer } from '../Charts/Charts';
import { nfts } from '../../../mocks/mockNFT';


const OpenSeaMarket: React.FC = () => {
  return (
    <StyledBlockContainer>
      <h2>NFT Collection</h2>
      <Grid container spacing={2}>
        {nfts.map((nft) => (
          <Grid item xs={12} sm={6} md={4} key={nft.id}>
            <NFTCard nft={nft} />
          </Grid>
        ))}
      </Grid>
    </StyledBlockContainer>
  );
};

export default OpenSeaMarket;
