import { Card, CardContent, styled } from '@mui/material';
import React from 'react';

interface ICampaignCard {
  htmlString: string;
  period: {
    from: string;
    to: string;
  }
}

const IridescentCard = styled(Card)({
  background: 'linear-gradient(45deg, #89abe3 30%, #f49ac2 90%)',
  minHeight: '510px'
});

const CampaignCard: React.FC<ICampaignCard> = ({
  htmlString,
  period,
}) => {
  return (
    <IridescentCard>
      <CardContent>
        <h3>{period.from} - {period.to}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
      </CardContent>
    </IridescentCard>
  )
}

export default CampaignCard;