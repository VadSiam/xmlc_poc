import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
} from '@mui/material';
import CampaignsHistoryTable from './CampaignsHistoryTable';

const CampaignsHistory: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box>
      <Button
        style={{ textAlign: 'right' }}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Campaigns History
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box
          sx={{
            width: '80%',
            maxWidth: '800px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
            margin: 'auto',
            marginTop: '10%',
          }}
        >
          <CampaignsHistoryTable />
        </Box>
      </Modal>
    </Box>
  );
};

export default CampaignsHistory;
