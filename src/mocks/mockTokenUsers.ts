export const mockTokenUsers = [
  {
    id: 1,
    name: 'Alice',
    createdAt: '2023-01-10',
    tokens: [
      { symbol: 'ADDS', amount: 50 },
    ],
    campaignsParticipated: [
      { id: 1, name: 'Adidas Spring Collection', date: '2023-02-15', token: 'ADDS', amount: 50 },
      { id: 2, name: 'Adidas Summer Sale', date: '2023-03-20', token: 'ADDS', amount: 20 },
      { id: 3, name: 'Swap', date: '2023-01-20', token: 'ADDS', amount: 200 },
      { id: 4, name: 'Bought', date: '2023-01-22', token: 'ADDS', amount: 300 },
    ],
  },
  {
    id: 2,
    name: 'Bob',
    createdAt: '2023-01-12',
    tokens: [
      { symbol: 'ADDS', amount: 20 },
      // { symbol: 'PRDA', amount: 10 },
    ],
    campaignsParticipated: [
      { id: 1, name: 'Adidas Spring Collection', date: '2023-02-15', token: 'ADDS', amount: 20 },
      { id: 2, name: 'Adidas. Join with friends', date: '2022-02-15', token: 'ADDS', amount: 5 },
      { id: 3, name: 'Swap', date: '2023-01-20', token: 'ADDS', amount: 100 },
      { id: 4, name: 'Bought', date: '2023-01-22', token: 'ADDS', amount: 30 },
    ],
  },
  {
    id: 3,
    name: 'Carol',
    createdAt: '2023-01-15',
    tokens: [
      { symbol: 'ADDS', amount: 100 },
      // { symbol: 'GUCC', amount: 5 },
    ],
    campaignsParticipated: [
      { id: 2, name: 'Adidas Summer Sale', date: '2023-03-20', token: 'ADDS', amount: 100 },
      { id: 3, name: 'Swap', date: '2023-01-20', token: 'ADDS', amount: 20 },
      { id: 4, name: 'Bought', date: '2023-01-22', token: 'ADDS', amount: 400 },
    ],
  },
];
