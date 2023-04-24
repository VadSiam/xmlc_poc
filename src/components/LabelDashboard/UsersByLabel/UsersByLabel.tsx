// src/components/LabelDashboard/Users/Users.tsx

import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Avatar } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import UserData from './UserData';
import UserActivity from './UserActivity';
import { mockTokenUsers } from '../../../mocks/mockTokenUsers';
import { StyledBlockContainer } from '../../UserDashboard/Charts/Charts';
import { selectTokens } from '../../../app/slices/selectors';
import { useSelector } from 'react-redux';

const UsersByLabel: React.FC = () => {
  const tokens = useSelector(selectTokens);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledBlockContainer>
      <Box>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          User Analytics
        </Typography>
        {mockTokenUsers.map((user) => (
          <Accordion key={user.id} expanded={expanded === `panel${user.id}`} onChange={handleChange(`panel${user.id}`)}>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls={`panel${user.id}bh-content`} id={`panel${user.id}bh-header`}>
              <Typography>
                {user.name} - {user.tokens.find(token => token.symbol === 'ADDS')?.amount} $ADDS tokens
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <UserData userData={user} />
              <br />
              <UserActivity userCampaigns={user.campaignsParticipated} />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </StyledBlockContainer>
  );
};

export default UsersByLabel;
