import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { swapToken, updateUserBalance } from '../../../app/slices/tokenSlice';
import { RootState } from '../../../app/store';
import { selectTokens, selectUser } from '../../../app/slices/selectors';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Swap: React.FC = () => {
  const dispatch = useDispatch();
  const { id: userId } = useSelector(selectUser) ?? {};

  const tokens = useSelector(selectTokens);

  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState(0);

  if (!userId) {
    return null;
  }

  const handleSwap = () => {
    if (fromToken && toToken && amount > 0) {
      dispatch(updateUserBalance({ userId, fromToken, toToken, amount }));
    }
  };

  return (
    <div>
      <h2>Swap Tokens</h2>
      <FormControl fullWidth>
        <InputLabel>From</InputLabel>
        <Select
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
        >
          {tokens.map((token) => (
            <MenuItem key={token.tokenId} value={token.tokenId}>
              {token.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>To</InputLabel>
        <Select
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
        >
          {tokens.map((token) => (
            <MenuItem key={token.tokenId} value={token.tokenId}>
              {token.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Amount"
        type="number"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
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
