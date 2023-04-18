import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTokens, selectUser } from '../../../app/slices/selectors';
import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { updateUserBalance } from '../../../app/slices/userSlice';

const BuySell: React.FC = () => {
  const dispatch = useDispatch();
  // const { tokenBalance } = useSelector((state: RootState) => state.user);
  const tokens = useSelector(selectTokens);
  const { id: userId } = useSelector(selectUser) ?? {};

  const [tokenSymbol, setTokenSymbol] = useState('');
  const [amount, setAmount] = useState(0);

  if (!userId) {
    return null;
  }

  const handleTokenSymbolChange = (value: string) => {
    setTokenSymbol(value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleBuy = () => {
    if (amount > 0 && tokenSymbol) {
      dispatch(updateUserBalance({ userId, symbol: tokenSymbol.toLowerCase(), amount }));
    }
  };

  const handleSell = () => {
    if (amount > 0 && tokenSymbol) {
      dispatch(updateUserBalance({ userId, symbol: tokenSymbol.toLowerCase(), amount: -amount }));
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Buy/Sell Tokens
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Token Symbol</InputLabel>
            <Select value={tokenSymbol} onChange={(e) => handleTokenSymbolChange(e.target.value)}>
              {tokens.map((token) => (
                <MenuItem key={token.tokenId} value={token.symbol}>
                  {token.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="number"
            label="Amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" onClick={handleBuy}>
            Buy
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="secondary" onClick={handleSell}>
            Sell
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BuySell;
