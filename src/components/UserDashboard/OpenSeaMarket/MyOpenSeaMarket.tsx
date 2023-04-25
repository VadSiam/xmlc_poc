import React, { useState } from 'react';
import { Button, Grid, Modal } from '@mui/material';
import { StyledBlockContainer } from '../Charts/Charts';
import { nfts } from '../../../mocks/mockNFT';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/slices/selectors';
import MyNFTCard from './MyNFTCard';
import { NFTDetailsBody } from './NFTDetails';
import { NFT } from '../../../types/UserDashboardTypes';


const MyOpenSeaMarket: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentNFT, setNFT] = useState<NFT>();
  const { name } = useSelector(selectUser) ?? {};
  const filteredNFT = nfts.filter((nft) => nft.owner === name);
  const handleOpen = (nft: NFT) => {
    setNFT(nft)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledBlockContainer>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <h2>MY NFT Collection</h2>
        <Button variant="contained" color="primary" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'HIDE' : 'SHOW'}
        </Button>
      </div>
      {expanded ? (
        <Grid container spacing={2}>
          {filteredNFT.map((nft) => (
            <Grid
              key={nft.id}
              item
              xs={12}
              sm={6}
              md={6}
              sx={{ cursor: 'pointer', }}
              onClick={() => handleOpen(nft)}
            >
              <MyNFTCard nft={nft} />
            </Grid>
          ))}
        </Grid>
      ) : null
      }
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <NFTDetailsBody nft={currentNFT} />
      </Modal>

    </StyledBlockContainer >
  );
};

export default MyOpenSeaMarket;
