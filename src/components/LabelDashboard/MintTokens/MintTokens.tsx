import React, { useState } from 'react';
import { Box, Button, Typography, Grid, FormControl, MenuItem, Avatar, Collapse, Alert, IconButton } from '@mui/material';
import { ItemGrid, SelectNoBorder, StyledGreyGrid, TextFieldNoBorder } from '../../UserDashboard/TokenMarket/styles';
import { useSelector } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { selectTokens } from '../../../app/slices/selectors';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import { StyledBlockContainer } from '../../UserDashboard/Charts/Charts';
import CloseIcon from '@mui/icons-material/Close';

const fiatOptions = [
  { value: 'EUR', label: 'EUR', icon: <EuroRoundedIcon /> },
  { value: 'USD', label: 'USD', icon: <AttachMoneyRoundedIcon /> },
  { value: 'BTC', label: 'BTC', icon: <CurrencyBitcoinRoundedIcon /> },
]

const MintTokens: React.FC = () => {
  const tokens = useSelector(selectTokens);
  const [fromFiat] = useState(fiatOptions[0]?.value);
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    handleOpen();
    setAmount(0);
    console.log('Buy XMLC:', amount);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <StyledBlockContainer>
      <Collapse in={open}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Tokens have been minted
        </Alert>
      </Collapse>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h5" mb={2}>
          MINT
        </Typography>
        <StyledGreyGrid container>
          <ItemGrid item xs={12} >
            <Grid item xs={6} sm={8}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                <TextFieldNoBorder
                  type="number"
                  fullWidth
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  onFocus={handleFocus}
                />
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <SelectNoBorder
                  disabled
                  value='XMLC'
                >
                  <MenuItem value={tokens[0]?.symbol}>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                      <Avatar src={tokens[0]?.imageUrl} alt={`${tokens[0]?.name} logo`} style={{ marginRight: 10 }} />
                      {tokens[0]?.symbol}
                    </div>
                  </MenuItem>
                </SelectNoBorder>
              </FormControl>
            </Grid>
          </ItemGrid>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10px', width: '100%' }} >
            <ArrowDropDownIcon style={{ position: 'absolute' }} />
          </div>
          <ItemGrid item xs={12} >
            <Grid item xs={6} sm={8}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', color: '#000' }}>
                <TextFieldNoBorder
                  type="number"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={parseFloat((+amount * 1.6).toFixed(2))}
                />
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <SelectNoBorder
                  disabled
                  value='ADDS'
                >
                  <MenuItem value={tokens[2]?.symbol}>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                      <Avatar src={tokens[2]?.imageUrl} alt={`${tokens[2]?.name} logo`} style={{ marginRight: 10 }} />
                      {tokens[2]?.symbol}
                    </div>
                  </MenuItem>
                </SelectNoBorder>
              </FormControl>
            </Grid>
          </ItemGrid>
        </StyledGreyGrid>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!fromFiat || amount <= 0}
          style={{ width: '100%', height: '50px', fontSize: '1.3rem' }}
          size='large'
        >
          Mint
        </Button>
      </Box>
    </StyledBlockContainer>
  );
};

export default MintTokens;
