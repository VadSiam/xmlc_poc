import React from 'react';
import { Card, CardContent, Typography, Link, CardMedia } from '@mui/material';
import { News } from '../../../types/UserDashboardTypes';

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={news.imageUrl}
        alt={news.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {news.title}
        </Typography>
        <Link href={news.url} target="_blank" rel="noopener noreferrer">
          Read More
        </Link>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
