import { News } from "../types/UserDashboardTypes";

export const newsList: News[] = [
  {
    id: '1',
    title: 'Adidas Launches New Collection',
    url: 'https://example.com/adidas-news-1',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/adidas.png`,
  },
  {
    id: '2',
    title: 'Gucci Reveals New Lineup',
    url: 'https://example.com/gucci-news-1',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/gucci.png`,
  },
  {
    id: '3',
    title: 'Prada Unveils Spring Collection',
    url: 'https://example.com/prada-news-1',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/prada.png`,
  },
  {
    id: '4',
    title: 'Adidas Collaborates with Top Designer',
    url: 'https://example.com/adidas-news-2',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/adidas1.png`,
  },
  {
    id: '5',
    title: 'Gucci Expands Into New Markets',
    url: 'https://example.com/gucci-news-2',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/gucci1.png`,
  },
  {
    id: '6',
    title: 'Prada Bag Spring Collection',
    url: 'https://example.com/prada-news-2',
    imageUrl: `${process.env.PUBLIC_URL}/img/news/prada1.png`,
  },
];

