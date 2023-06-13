import { Button, Card, CardContent, styled } from '@mui/material';
import React from 'react';
import { extractHeaderText } from '../../../utils/helpers';

interface ICampaignCard {
  htmlString: string;
  click: () => void;
  period: {
    from: string;
    to: string;
  };
}

const IridescentCard = styled(Card)({
  background: 'linear-gradient(45deg, #89abe3 30%, #f49ac2 90%)',
  minHeight: '510px'
});

const CampaignCard: React.FC<ICampaignCard> = ({
  htmlString,
  period,
  click,
}) => {
  const labelFromHTML = extractHeaderText(htmlString);
  const buttonName = !labelFromHTML
    ? 'XMLC'
    : labelFromHTML === 'Adidas'
      ? 'ADDS'
      : labelFromHTML === 'Gucci'
        ? 'GUCC'
        : labelFromHTML === 'Prada'
          ? 'PRDA'
          : 'XMLC'

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
        <Button
          onClick={click}
          variant='contained'
          color="secondary">
          {`Collect $${buttonName}`}
        </Button>
      </CardContent>
    </IridescentCard>
  )
}

export default CampaignCard;