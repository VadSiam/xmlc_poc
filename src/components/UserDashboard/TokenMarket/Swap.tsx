import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { selectTokens, selectUser } from '../../../app/slices/selectors';
import { Alert, Avatar, Button, Collapse, FormControl, Grid, IconButton, MenuItem, Typography } from '@mui/material';
import { updateUserBalanceSwap } from '../../../app/slices/userSlice';
import { ItemGrid, SelectNoBorder, StyledGreyGrid, TextFieldNoBorder } from './styles';
import CloseIcon from '@mui/icons-material/Close';

interface ISwap {
  sell?: boolean;
}

const Swap: React.FC<ISwap> = ({ sell }) => {
  const dispatch = useDispatch();
  const { id: userId } = useSelector(selectUser) ?? {};
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tokens = useSelector(selectTokens);
  const tokensWithoutXmlc = tokens.slice(1);

  const [fromToken, setFromToken] = useState(tokens[1].symbol);
  const [toToken, setToToken] = useState(tokens[0].symbol);
  const [amount, setAmount] = useState(0);
  const toTokensList = tokens.filter((token) => token.symbol !== fromToken);

  if (!userId) {
    return null;
  }

  const handleSwap = () => {
    if (fromToken && toToken && amount > 0) {
      dispatch(updateUserBalanceSwap({ userId, fromToken: fromToken.toLowerCase(), toToken: toToken.toLowerCase(), amount }));
      handleOpen();
      setAmount(0);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <div>
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
          tokens were exchanged/sold
        </Alert>
      </Collapse>
      <h2>{sell ? 'Sell' : 'Swap'} Tokens</h2>
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
              {amount
                ? (<Typography variant="caption" display="block" gutterBottom style={{ padding: '0 14px', marginTop: '-16px' }}>
                  {parseFloat((+amount * 1.2).toFixed(2))} €
                </Typography>)
                : <Typography component='span'>{' '}</Typography>}
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <SelectNoBorder
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value as string)}
              >
                {(sell ? tokensWithoutXmlc : tokens).map((token) => (
                  <MenuItem key={token.tokenId} value={token.symbol}>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                      <Avatar src={token.imageUrl} alt={`${token.name} logo`} style={{ marginRight: 10 }} />
                      {token.symbol}
                    </div>
                  </MenuItem>
                ))}
              </SelectNoBorder>
            </FormControl>
          </Grid>
        </ItemGrid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10px', width: '100%' }} >
          <ArrowDropDownIcon style={{ position: 'absolute' }} />
        </div>
        <ItemGrid item xs={12} >
          <Grid item xs={6} sm={8}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
              <TextFieldNoBorder
                type="number"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                value={parseFloat((+amount / 1.5).toFixed(2))}
              />
              {amount
                ? (<Typography variant="caption" display="block" gutterBottom style={{ padding: '0 14px', marginTop: '-16px' }}>
                  {parseFloat((+amount / 1.5 * 1.2).toFixed(2))} €
                </Typography>)
                : <Typography component='span'>{' '}</Typography>}
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <SelectNoBorder
                disabled={sell}
                value={toToken}
                onChange={(e) => setToToken(e.target.value as string)}
              >
                {toTokensList.map((token) => (
                  <MenuItem key={token.tokenId} value={token.symbol}>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                      <Avatar src={token.imageUrl} alt={`${token.name} logo`} style={{ marginRight: 10 }} />
                      {token.symbol}
                    </div>
                  </MenuItem>
                ))}
              </SelectNoBorder>
            </FormControl>
          </Grid>
        </ItemGrid>
      </StyledGreyGrid>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSwap}
        disabled={!fromToken || !toToken || amount <= 0}
        style={{ width: '100%', height: '50px', fontSize: '1.3rem' }}
        size='large'
      >
        {sell ? 'Sell' : 'Swap'}
      </Button>
    </div>
  );
};


export default Swap;
