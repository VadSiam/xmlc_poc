import { DropAction } from "../types/UserDashboardTypes";

export const actionsList: DropAction[] = [
  {
    id: '1',
    title: 'Link your TikTok account now and get 100 $ADDS',
    description: 'Connect your TikTok account with our platform to receive a bonus of 100 $ADDS tokens. Share your love for ADDS and grow your balance instantly!',
    url: 'https://example.com/adidas-news-1',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/adidas.png`,
  },
  {
    id: '2',
    title: 'Stake $GUCC to get access to limited edition NFT',
    description: 'Stake your $GUCC tokens and gain exclusive access to a limited edition NFT collection. Show your support for Gucci and add these rare pieces to your digital portfolio.',
    url: 'https://example.com/gucci-news-1',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/gucci.png`,
  },
  {
    id: '3',
    title: 'Connect to Prada`s Spotify stream and get 250 $PRDA',
    description: 'Join the Prada community on Spotify and earn 250 $PRDA tokens. Listen to curated playlists and immerse yourself in the world of Prada while growing your token balance.',
    url: 'https://example.com/prada-news-1',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/prada.png`,
  },
  {
    id: '4',
    title: 'Register now for new Adidas NFT Drop',
    description: 'Don`t miss your chance to own exclusive Adidas NFTs! Register now for the upcoming NFT drop and secure your spot in the queue to purchase these unique digital assets.',
    url: 'https://example.com/adidas-news-2',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/adidas1.png`,
  },
  {
    id: '5',
    title: 'Poll: Which Gucci NFT do you prefer ?',
    description: 'Have your say in our latest community poll! Vote for your favorite Gucci NFT design and help shape the future of this luxury brand`s digital collectibles.',
    url: 'https://example.com/gucci-news-2',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/gucci1.png`,
  },
  {
    id: '6',
    title: 'Post a photo of your favorite Prada item to enter free NFT giveaway',
    description: 'Share your love for Prada by posting a photo of your favorite Prada item on social media. Use the designated hashtag, and you`ll be entered into a giveaway for a chance to win a free Prada NFT.',
    url: 'https://example.com/prada-news-2',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/prada1.png`,
  },
];
