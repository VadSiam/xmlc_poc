import React from 'react';
import { Grid } from '@mui/material';
import NFTCard from './NFTCard';
import { StyledBlockContainer } from '../Charts/Charts';
import { nfts } from '../../../mocks/mockNFT';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/slices/selectors';
import MyNFTCard from './MyNFTCard';


const MyOpenSeaMarket: React.FC = () => {
  const { name } = useSelector(selectUser) ?? {};
  const filteredNFT = nfts.filter((nft) => nft.owner === name);
  return (
    <StyledBlockContainer>
      <h2>MY NFT Collection</h2>
      <Grid container spacing={2}>
        {filteredNFT.map((nft) => (
          <Grid item xs={12} sm={6} md={4} key={nft.id}>
            <MyNFTCard nft={nft} />
          </Grid>
        ))}
      </Grid>
    </StyledBlockContainer>
  );
};

export default MyOpenSeaMarket;
