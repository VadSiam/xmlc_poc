import React from 'react';
import { Grid } from '@mui/material';
import NewsCard from './NewsCard';
import { News } from '../../../types/UserDashboardTypes';
import { StyledBlockContainer } from '../Charts/Charts';

interface NewsFeedProps {
  newsList: News[];
}

const NewsFeed: React.FC<NewsFeedProps> = ({ newsList }) => {
  return (
    <StyledBlockContainer>
      <h2>New drops and actions</h2>
      <Grid container spacing={2}>
        {newsList.map((news) => (
          <Grid item key={news.id} xs={12} sm={6} md={4}>
            <NewsCard news={news} />
          </Grid>
        ))}
      </Grid>
    </StyledBlockContainer>
  );
};

export default NewsFeed;
