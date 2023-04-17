import mockTokens from "../mocks/mockTokens";

export interface TokenData {
  date: string;
  price: number;
  volume: number;
}

export interface Data {
  [key: string]: TokenData[];
}


const generateTokenMarketData = (months = 3) => {
  const tokens = mockTokens.tokens.map((token) => token.symbol);
  const data: Data = {};
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(endDate.getMonth() - months);

  for (const token of tokens) {
    data[token] = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const price = parseFloat((Math.random() * 10).toFixed(2));
      const volume = parseFloat((Math.random() * 1000).toFixed(2));
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      data[token].push({
        date: `${day}.${month}`,
        price,
        volume,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  return data;
};

export {generateTokenMarketData }
