import React, { useState } from 'react';
import { Box, Grid, Modal, styled } from '@mui/material';
import { DropAction } from '../../../types/UserDashboardTypes';
import { StyledBlockContainer } from '../Charts/Charts';
import DropActionCard from './DropActionCard';
import { breakpoints } from '../../../styles';
import DropActionCardFull from './DropActionCardFull';

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
              <DropActionCardFull
                imageUrl={selectedDropAction.imageUrl}
                title={selectedDropAction.title}
                description={selectedDropAction.description}
              />
            </StyledBox>
          </Modal>
        )}
      </Box>
    </StyledBlockContainer>
  );
};

export default NewDropsAndActions;
