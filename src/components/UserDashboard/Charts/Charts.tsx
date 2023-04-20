import React from 'react';
import { Container, Grid } from '@mui/material';
import { TokenChart } from './TokenChart';
import { TokenData, generateTokenMarketData } from '../../../utils/dataGenerator';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


export const StyledBlockContainer = styled(Container)`
  padding: 2rem;
  background-color: ${({ theme }: { theme?: Theme }) => theme?.palette.background.paper};
`;

const tokenMarketData = generateTokenMarketData(1);

export const Charts: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [activeToken, setActiveToken] = React.useState({token: '', data: [] as TokenData[]});
  const handleOpen = (token: string, data: TokenData[]) => {
    setOpen(true)
    setActiveToken({token, data})
  };
  const handleClose = () => setOpen(false);

  return (
    <StyledBlockContainer>
      <h2>
        Token Charts
      </h2>
      <Grid container>
        {Object.entries(tokenMarketData).map(([token, data]) => (
          <Grid key={token} item sm={6}>
            <Button 
            sx={{textTransform: 'none', color: '#000'}}
            onClick={() => handleOpen(token, data)}
            >
              <TokenChart token={token} data={data} />
            </Button>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TokenChart token={activeToken?.token} data={activeToken?.data} />
        </Box>
      </Modal>
    </StyledBlockContainer>
  );
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};