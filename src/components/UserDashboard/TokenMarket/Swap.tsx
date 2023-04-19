import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { selectTokens, selectUser } from '../../../app/slices/selectors';
import { Avatar, Box, Button, FormControl, Grid, MenuItem, Modal, Select, TextField, Theme, Typography, styled } from '@mui/material';
import { updateUserBalanceSwap } from '../../../app/slices/userSlice';
import { breakpoints } from '../../../styles';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '1px solid "background.paper"',
  boxShadow: 24,
  p: 1,
  borderRadius: 5,
  textAlign: 'center' as const,
  color: 'green'
}

export const TextFieldNoBorder = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border: none;
      fontSize: 40px;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
    & input::-webkit-outer-spin-button,
    & input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & input[type='number'] {
      -moz-appearance: textfield;
    }
    // Increase font size inside the input field
    input {
      font-size: 1.5rem; // Adjust this value to your desired font size
    }
  }
`;
export const SelectNoBorder = styled(Select)`
  /* .MuiSelect-select {
    font-size: 1.5rem; // Adjust this value to your desired font size
  } */

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const StyledGreyGrid = styled(Grid)`
  background-color:  ${({ theme }: { theme?: Theme }) => theme?.palette.background.default};
  border-radius: 10px;
  padding: 30px 70px;
  @media (max-width: ${breakpoints.sm}) {
    padding: 10px;
  }
`;

export const ItemGrid = styled(Grid)`
  background-color:  ${({ theme }: { theme?: Theme }) => theme?.palette.background.paper};
  border-radius: 10px;
  display: flex;
  align-items: center;
`

const Swap: React.FC = () => {
  const dispatch = useDispatch();
  const { id: userId } = useSelector(selectUser) ?? {};
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tokens = useSelector(selectTokens);

  const [fromToken, setFromToken] = useState(tokens[0].symbol);
  const [toToken, setToToken] = useState(tokens[1].symbol);
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SUCCESS
          </Typography>
        </Box>
      </Modal>
      <h2>Swap Tokens</h2>
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
                : <Typography>{' '}</Typography>}
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <SelectNoBorder
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value as string)}
              >
                {tokens.map((token) => (
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
                : <Typography>{' '}</Typography>}
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <SelectNoBorder
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
        Swap
      </Button>
    </div>
  );
};


export default Swap;
