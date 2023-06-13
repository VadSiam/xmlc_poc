import { Card, CardContent, styled } from '@mui/material';
import React from 'react';

interface ICampaignCard {
  htmlString: string;
  period: {
    from: string;
    to: string;
  };
}

const IridescentCard = styled(Card)({
  background: 'linear-gradient(45deg, #89abe3 30%, #f49ac2 90%)',
  minHeight: '540px'
});

const CampaignCard: React.FC<ICampaignCard> = ({
  htmlString,
  period,
}) => {
  return (
    <IridescentCard>
      <CardContent>
        <div
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
        <h3
          style={{
            textAlign: 'right',
            fontWeight: 400
          }}
        >{period.from} - {period.to}</h3>
      </CardContent>
    </IridescentCard>
  )
}

export default CampaignCard;