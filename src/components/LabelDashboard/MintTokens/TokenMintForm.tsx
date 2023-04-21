import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Avatar, Alert, IconButton, Collapse } from '@mui/material';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { selectTokens } from '../../../app/slices/selectors';
import CloseIcon from '@mui/icons-material/Close';

const FormGrid = styled(Grid)`
  margin: 10px;
`;


const TokenMintForm: React.FC = () => {
  const tokens = useSelector(selectTokens);
  const [value, setValue] = useState('0');
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const handleOpenSuccess = () => setOpenSuccess(true);
  const handleCloseSuccess = () => setOpenSuccess(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValue('0');
    handleOpenSuccess();
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Collapse in={openSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleCloseSuccess}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Tokens was minted
        </Alert>
      </Collapse>
      <FormGrid container spacing={2}>
        <div>
          <h3> You are the owner of the: </h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={tokens?.[1]?.imageUrl} alt={`${tokens?.[1]?.name} logo`} style={{ marginRight: 10 }} />
            <div>${tokens?.[1]?.symbol} token</div>
          </div>
          <br />
          <Typography>
            How many tokens do you want to mint?
          </Typography>
          <br />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <TextField
              label="Amount"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              fullWidth
              required
              onFocus={handleFocus}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ height: '100%', fontSize: '1.0rem' }}
            >
              Mint Token
            </Button>
          </Grid>
        </Grid>
      </FormGrid>
    </form>
  );
};

export default TokenMintForm;
