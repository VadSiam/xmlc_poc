import React, { useState } from 'react';
import { Badge, Chip, Grid, Modal } from '@mui/material';
import NFTCard from './NFTCard';
import { StyledBlockContainer } from '../Charts/Charts';
import { nfts } from '../../../mocks/mockNFT';
import { NFT } from '../../../types/UserDashboardTypes';
import { NFTDetailsBody } from './NFTDetails';


const tagsWithoutAll = ['game', 'style', 'food', 'prada', 'gucci', 'shoes', 'adidas'];
const tags = ['All', ...tagsWithoutAll];

const OpenSeaMarket: React.FC = () => {
  const svgPath = `${process.env.PUBLIC_URL}/img/others/opensea.svg`
  const [open, setOpen] = useState(false);
  const [currentNFT, setNFT] = useState<NFT>();
  const [activeTags, setActiveTags] = useState<string[]>(tagsWithoutAll);
  const filteredNFT = nfts.filter((nft) => {
    if (activeTags.length === 0) {
      return false;
    } else {
      return activeTags.some(elem => (nft?.tags ?? []).includes(elem));
    }
  });


  const handleOpen = (nft: NFT) => {
    setNFT(nft)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTagClick = (tag: string) => {
    if (tag === 'All') {
      if (activeTags.length === tags.length - 1) {
        setActiveTags([]);
      } else {
        setActiveTags(tags.filter((t) => t !== 'All'));
      }
    } else {
      setActiveTags((prevActiveTags) => {
        if (prevActiveTags.includes(tag)) {
          return prevActiveTags.filter((activeTag) => activeTag !== tag);
        } else {
          return [...prevActiveTags, tag];
        }
      });
    }
  };

  return (
    <StyledBlockContainer>
      <h2>NFT Collection.</h2>
      <div
        style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
      >With OpenSea
        <img
          src={svgPath}
          alt="SVG Image"
          style={{
            width: '24px',
            height: 'auto',
            marginLeft: '5px',
            marginRight: '5px',
          }}
        />
        collaboration </div>
      <br />
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          clickable
          onClick={() => handleTagClick(tag)}
          color={activeTags.includes(tag) ? 'primary' : 'default'}
          sx={{ margin: 1 }}
        />
      ))}
      <br />
      <br />
      <Grid container spacing={2}>
        {filteredNFT.map((nft, indx) => (
          <Grid item xs={12} sm={6} md={4} key={nft.id}
            onClick={() => handleOpen(nft)}
          >
            <Badge
              badgeContent={'NEW'}
              color="secondary"
              invisible={indx > 2 ? true : false}
            >
              <NFTCard nft={nft} />
            </Badge>
          </Grid>
        ))}
        {filteredNFT.length === 0 && (
          <Grid item xs={12} sm={6} md={4}>
            <h3>No NFTs</h3>
            <div
              style={{
                height: "400px"
              }}
            />
          </Grid>
        )}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <NFTDetailsBody nft={currentNFT} simple />
      </Modal>
    </StyledBlockContainer>
  );
};

export default OpenSeaMarket;
