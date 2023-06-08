import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { Box, Grid, Modal } from '@mui/material';
import CampaignCard from './CampaignCard';

const EndlessScrollComponent = () => {
  const { campaigns } = useSelector((state: RootState) => state.newsCampaigns);
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState(campaigns ?? []);
  const [hasMore, setHasMore] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchMoreData = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setItems(items => [...items, ...campaigns]);
    }, 100);
  };

  return (
    <div>
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
          <div>Congrats! You received your $ADDS tokens 🎉 🥳 🙌</div>
        </Box>
      </Modal>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.map(({ body, date }, index) => (
          <Grid
            key={index}
            item xs={12}
            style={{
              padding: '40px',
            }}
          >
            <CampaignCard
              htmlString={body}
              period={date}
              click={handleOpen}
            />
          </Grid>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default EndlessScrollComponent;
