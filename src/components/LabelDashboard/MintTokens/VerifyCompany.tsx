import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  Grid,
  IconButton,
  Alert,
  Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const VerifyCompany: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const handleOpenSuccess = () => setOpenSuccess(true);
  const handleCloseSuccess = () => setOpenSuccess(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleOpenSuccess();
  };

  const handleSubmit = () => {
    console.log('Company verification request:', { companyName, personName, email, phone });
    handleClose();
  };

  return (
    <Box>
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
          Your company registration in process
        </Alert>
      </Collapse>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Verify Your Company
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box
          sx={{
            width: '80%',
            maxWidth: '500px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
            margin: 'auto',
            marginTop: '10%',
          }}
        >
          <Typography variant="h5" mb={2}>
            Company Verification
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Person Full Name"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default VerifyCompany;
