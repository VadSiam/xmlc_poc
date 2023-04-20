import React from 'react';
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
} from 'recharts';
import { Avatar, Typography } from '@mui/material';
import { TokenData } from '../../../utils/dataGenerator';
import mockTokens from '../../../mocks/mockTokens';

export interface TokenChartProps {
  token: string;
  data: TokenData[];
  simple?: boolean;
}

export const TokenChart: React.FC<TokenChartProps> = ({ data, token, simple }) => {
  const tokenUrl = mockTokens.tokens.find((t) => t.symbol === token)?.imageUrl;
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Typography variant="h5" gutterBottom style={{ display: 'flex', alignItems: 'center', fontSize: 16 }}>
        {!simple && <>
          <Avatar src={tokenUrl} alt={`${token} logo`} style={{ marginRight: 20 }} />
          {token} Monthly price and volume chart
        </>}
      </Typography>
      <ResponsiveContainer width="99%" height={300}>
        <ComposedChart width={500} height={300} data={data}>
          <XAxis dataKey="date" />
          <YAxis yAxisId={1} orientation="right" label={{ value: 'Volume xmlc', angle: -90 }} />
          <YAxis yAxisId={2} label={{ value: 'Price xmlc', angle: -90 }} />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          {!simple && <Bar yAxisId={1} dataKey="volume" barSize={20} fill="#caedd7" />}
          <Line yAxisId={2} type="monotone" dataKey="price" stroke="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </div >
  );
};
