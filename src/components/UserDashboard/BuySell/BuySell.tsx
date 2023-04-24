import React, { useState } from 'react';
import { Box, Button, Typography, Grid, FormControl, MenuItem, Avatar, Collapse, Alert, IconButton, Tooltip } from '@mui/material';
import { ItemGrid, SelectNoBorder, StyledGreyGrid, TextFieldNoBorder } from '../../UserDashboard/TokenMarket/styles';
import { useSelector } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { selectTokens } from '../../../app/slices/selectors';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import CurrencyFrancIcon from '@mui/icons-material/CurrencyFranc';
import { StyledBlockContainer } from '../../UserDashboard/Charts/Charts';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const fiatOptions = [
  { value: 'EUR', label: 'EUR', icon: <EuroRoundedIcon /> },
  { value: 'USD', label: 'USD', icon: <AttachMoneyRoundedIcon /> },
  { value: 'CHF', label: 'CHF', icon: <CurrencyFrancIcon /> },
]

const paymentIcon = [
  `${process.env.PUBLIC_URL}/img/others/apay.svg`,
  `${process.env.PUBLIC_URL}/img/others/gpay.svg`,
  `${process.env.PUBLIC_URL}/img/others/visa.svg`,
  `${process.env.PUBLIC_URL}/img/others/mastercard.svg`,
]

const BuySell: React.FC = () => {
  const svgPath = `${process.env.PUBLIC_URL}/img/others/moon-pay.svg`
  const tokens = useSelector(selectTokens);
  const [fromFiat, setFromFiat] = useState(fiatOptions[0]?.value);
  const [amount, setAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [sell, onSellChange] = React.useState(false);
  const changeToSellOrBuy = () => {
    onSellChange(state => !state);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    handleOpen();
    setAmount(0);
    setSellAmount(0);
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
          Tokens have been {`${sell ? 'sold' : 'purchased'}`}
        </Alert>
      </Collapse>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h5" mb={2}>
          {sell ? 'Sell' : 'Buy'} $XMLC
          <Tooltip
            placement="top-start"
            title="To change buy/sell functionality please click arrow button in the middle"
          >
            <IconButton>
              <InfoOutlinedIcon
                sx={{ fontSize: 26, marginTop: -2, color: 'indianred' }}
              />
            </IconButton>
          </Tooltip>
        </Typography>
        <StyledGreyGrid
          container
          sx={{ flexDirection: sell ? 'column-reverse' : 'column' }}
        >
          <ItemGrid item xs={12} >
            <Grid item xs={6} sm={8}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                <TextFieldNoBorder
                  type="number"
                  fullWidth
                  value={
                    sell
                      ? parseFloat((+sellAmount * 1.4).toFixed(2))
                      : amount
                  }
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  onFocus={handleFocus}

                  InputProps={{
                    readOnly: sell ? true : false,
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <SelectNoBorder
                  value={fromFiat}
                  onChange={(e) => setFromFiat(e.target.value as string)}
                >
                  {(fiatOptions).map((fiat) => (
                    <MenuItem key={fiat.value} value={fiat.value}>
                      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        <div style={{ marginRight: 28, marginTop: 6 }}>{fiat.icon}</div>
                        {fiat.label}
                      </div>
                    </MenuItem>
                  ))}
                </SelectNoBorder>
              </FormControl>
            </Grid>
          </ItemGrid>
          <div
            onClick={changeToSellOrBuy}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10px', width: '100%' }}
          >
            <ArrowDropDownIcon style={{ position: 'absolute', cursor: 'pointer' }} />
          </div>
          <ItemGrid item xs={12} >
            <Grid item xs={6} sm={8}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                <TextFieldNoBorder
                  type="number"
                  fullWidth
                  InputProps={{
                    readOnly: sell ? false : true,
                  }}
                  value={
                    sell
                      ? sellAmount
                      : parseFloat((fromFiat === 'EUR' ? (+amount * 0.6) : (+amount * 0.4)).toFixed(2))
                  }
                  onChange={(e) => setSellAmount(parseFloat(e.target.value))}
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
        </StyledGreyGrid>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={sell ? (!fromFiat || sellAmount <= 0) : (!fromFiat || amount <= 0)}
          style={{ width: '100%', height: '50px', fontSize: '1.3rem' }}
          size='large'
        >
          {sell ? 'Sell' : 'Buy'}
        </Button>
        <Typography
          sx={{ textAlign: 'center' }}
          mt={2}>
          All operations going via
          <img
            src={svgPath}
            alt="SVG Image"
            style={{
              width: '100px',
              height: 'auto',
              marginBottom: '-4px',
              marginLeft: '5px'
            }}
          />
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {paymentIcon.map((path, idx) => (<img
            key={idx}
            src={path}
            alt="SVG Image"
            style={{
              width: '40px',
              height: 'auto',
              marginBottom: '-4px',
              marginLeft: '5px'
            }}
          />))}
        </Typography>
      </Box>
    </StyledBlockContainer>
  );
};

export default BuySell;