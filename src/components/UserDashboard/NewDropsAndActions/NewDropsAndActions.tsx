import React, { useState } from 'react';
import { Box, Grid, Modal, styled } from '@mui/material';
import { DropAction } from '../../../types/UserDashboardTypes';
import { StyledBlockContainer } from '../Charts/Charts';
import DropActionCard from './DropActionCard';
import { breakpoints } from '../../../styles';

const StyledBox = styled(Box)`
  width: 40%;
  @media (max-width: ${breakpoints.xl}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.sm}) {
    width: 80%;
  }
`;

interface NewDropsAndActionsProps {
  dropActions: DropAction[];
}

const NewDropsAndActions: React.FC<NewDropsAndActionsProps> = ({ dropActions }) => {
  const [selectedDropAction, setSelectedDropAction] = useState<DropAction | null>(null);

  const handleClose = () => {
    setSelectedDropAction(null);
  };

  return (
    <StyledBlockContainer>
      <h2>New drops and actions</h2>
      <Box>
        <Grid container spacing={2}>
          {dropActions.map((dropAction) => (
            <Grid item xs={12} sm={4} key={dropAction.id}>
              <DropActionCard dropAction={dropAction} onClick={() => setSelectedDropAction(dropAction)} />
            </Grid>
          ))}
        </Grid>
        {selectedDropAction && (
          <Modal
            open={Boolean(selectedDropAction)}
            onClose={handleClose}
            closeAfterTransition
          >
            <StyledBox
              sx={{
                // width: '50%',
                maxWidth: '800px',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 1,
                margin: 'auto',
                marginTop: '5%',
                outline: 'none',
              }}
            >
              <img src={selectedDropAction.imageUrl} alt={selectedDropAction.title} style={{ width: '100%', height: 'auto' }} />
              <h3>{selectedDropAction.title}</h3>
              <p>{selectedDropAction.description}</p>
            </StyledBox>
          </Modal>
        )}
      </Box>
    </StyledBlockContainer>
  );
};

export default NewDropsAndActions;
