import React from 'react';

interface ICampaignCard {
  htmlString: string;
  period: {
    from: string;
    to: string;
  }
}

const CampaignCard: React.FC<ICampaignCard> = ({
  htmlString,
  period,
}) => {
  return (
    <div>
      <h3>{period.from} - {period.to}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    </div>
  )
}

export default CampaignCard;