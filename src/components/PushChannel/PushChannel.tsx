import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid } from '@mui/material';
import { RootState } from '../../app/store';
import { CreateNewsCampaign } from './CreateNewsCampaign';
import CampaignCard from './CampaignCard';
import { StyledBlockContainer } from '../UserDashboard/Charts/Charts';

const PushChannel: React.FC = () => {
  const { campaigns } = useSelector((state: RootState) => state.newsCampaigns);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledBlockContainer>
      <h2>Engagement</h2>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        New Campaign
      </Button>
      <br />
      <br />
      <CreateNewsCampaign open={open} onClose={handleClose} />
      <Grid container spacing={2}>
        {campaigns.map(({ body, date }, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <CampaignCard
              htmlString={body}
              period={date}
            />
          </Grid>
        ))}
      </Grid>
    </StyledBlockContainer>
  );
};

export default PushChannel;
