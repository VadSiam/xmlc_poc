import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTokens, selectUser } from '../../../app/slices/selectors';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { updateUserBalanceSwap } from '../../../app/slices/userSlice';

const Swap: React.FC = () => {
  const dispatch = useDispatch();
  const { id: userId } = useSelector(selectUser) ?? {};

  const tokens = useSelector(selectTokens);

  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState(0);
  const toTokensList = tokens.filter((token) => token.symbol !== fromToken);

  if (!userId) {
    return null;
  }

  const handleSwap = () => {
    if (fromToken && toToken && amount > 0) {
      dispatch(updateUserBalanceSwap({ userId, fromToken: fromToken.toLowerCase(), toToken: toToken.toLowerCase(), amount }));
    }
  };

  return (
    <div>
      <h2>Swap Tokens</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>From</InputLabel>
            <Select
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
            >
              {tokens.map((token) => (
                <MenuItem key={token.tokenId} value={token.symbol}>
                  {token.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>To</InputLabel>
            <Select
              value={toToken}
              onChange={(e) => setToToken(e.target.value)}
            >
              {toTokensList.map((token) => (
                <MenuItem key={token.tokenId} value={token.symbol}>
                  {token.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />
      <Grid item xs={6} sm={6}>
        <TextField
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </Grid>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSwap}
        disabled={!fromToken || !toToken || amount <= 0}
      >
        Swap
      </Button>
    </div>
  );
};


export default Swap;
