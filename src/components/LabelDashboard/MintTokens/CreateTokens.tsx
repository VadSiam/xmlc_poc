import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  IconButton,
  Alert,
  Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TokenCreateForm from './TokenCreateForm';

const CreateTokens: React.FC = () => {
  const [open, setOpen] = useState(false);
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
    console.log('Tokens was created');
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
          Tokens was created
        </Alert>
      </Collapse>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create Tokens Form
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
          <TokenCreateForm onCreateToken={handleSubmit} />
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateTokens;
