import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ItemGrid,  } from '../../UserDashboard/TokenMarket/styles';
import { StyledBlockContainer } from '../../UserDashboard/Charts/Charts';
import ImageIcon from '@mui/icons-material/Image';


const MintNFT: React.FC = () => {

  return (
    <StyledBlockContainer>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h5" mb={2}>
          NFT mint
        </Typography>
        <br />
        <Grid
          container
          spacing={1}
        >
          <ItemGrid
            item
            xs={12}
            md={12}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '200px',
              border: '2px solid #f4f5f7',
              textAlign: 'center',
            }}>
            <p style={{ margin: '-8px 0 10px 0', whiteSpace: 'pre-line' }}><strong>Create your own NFT</strong><br/>Upload file here<br />Add information</p>
            <ImageIcon fontSize='large' color='secondary' />
          </ItemGrid>
        </Grid>
      </Box>
    </StyledBlockContainer>
  );
};

export default MintNFT;
