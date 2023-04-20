import React from 'react';
import { Avatar, Card, CardContent, Typography, styled } from '@mui/material';
import { TokenBalanceType } from '../../../types/UserTypes';
import mockTokens, { XMLC_TO_EUR_RATE } from '../../../mocks/mockTokens';
import { useSelector } from 'react-redux';
import { selectTokens } from '../../../app/slices/selectors';
import { generateTokenMarketData } from '../../../utils/dataGenerator';
import { TokenChart } from '../Charts/TokenChart';
import { breakpoints } from '../../../styles';

const tokensMarketData = generateTokenMarketData(1);

interface TokenCardProps {
  tokenBalance: TokenBalanceType;
}

const StyledDiv = styled('div')`
  width: 400px; 
  height: 100px;
  scale: 0.3;
  margin-top: -50px;
  margin-right: -155px;
  @media (max-width: ${breakpoints.sm}) {
    margin-right: -115px;
  }
`


export const TokenCard: React.FC<TokenCardProps> = ({ tokenBalance }) => {
  const existingTokens = useSelector(selectTokens);
  const { tokenId, balance } = tokenBalance;
  const [token, tokenMarketData] = Object.entries(tokensMarketData).find(([t]) => t === tokenId?.toUpperCase()) ?? [];
  const tokenEURPrice = (existingTokens?.find((t) => t.symbol === tokenId.toUpperCase())?.price ?? 0) * XMLC_TO_EUR_RATE;
  const tokenUrl = mockTokens.tokens.find((t) => t.symbol === tokenBalance?.tokenId?.toUpperCase())?.imageUrl;
  return (
    <Card sx={{
      marginBottom: '1rem',
    }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxHeight: 150 }}>
        <Typography variant="h5" component="div" style={{ display: 'flex', alignItems: 'center', fontSize: 16 }}>
          <Avatar src={tokenUrl} alt={`${tokenId} logo`} style={{ marginRight: 20 }} />
          <Typography variant="h5" component="div" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 16 }}>
            {balance} ${tokenId.toUpperCase()}
            <Typography variant="h5" component="div" style={{ fontSize: 13, color: 'grey' }}>
              {parseFloat((+tokenEURPrice * balance).toFixed(2))} €
            </Typography>
          </Typography>
        </Typography>
        <StyledDiv>
          {token && tokenMarketData && (
            <TokenChart simple token={token} data={tokenMarketData} />
          )}
        </StyledDiv>
      </CardContent>
    </Card>
  );
};
