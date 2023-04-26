import React from 'react';

interface IDropActionCardFull {
  imageUrl?: string;
  title?: string;
  description: string;
}

const DropActionCardFull: React.FC<IDropActionCardFull> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />}
      {title && <h3>{title}</h3>}
      <p>{description}</p>
    </div>
  )
}

export default DropActionCardFull;