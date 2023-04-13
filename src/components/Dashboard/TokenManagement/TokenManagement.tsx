import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTokens, createToken, editToken, deleteToken } from '../../../app/slices/tokenManagementSlice';
import { Token } from '../../../types/TokenTypes';
import TokenCard from './TokenCard';
import TokenForm from './TokenForm';
import TokenDetails from './TokenDetails';

const TokenManagement: React.FC = () => {
  const dispatch = useDispatch();
  const tokens = useSelector(selectTokens);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  const handleCreateToken = (token: Token) => {
    dispatch(createToken(token));
  };

  const handleEditToken = (token: Token) => {
    dispatch(editToken(token));
  };

  const handleDeleteToken = (tokenId: string) => {
    dispatch(deleteToken(tokenId));
  };

  const handleSelectToken = (token: Token) => {
    setSelectedToken(token);
  };

  return (
    <div>
      <h2>Token Management</h2>
      <TokenForm onCreateToken={handleCreateToken} />
      <div>
        {tokens.map((token) => (
          <TokenCard key={token.id} token={token} onSelect={handleSelectToken} onDelete={handleDeleteToken} />
        ))}
      </div>
      {selectedToken && (
        <TokenDetails token={selectedToken} onEditToken={handleEditToken} onDeleteToken={handleDeleteToken} />
      )}
    </div>
  );
};

export default TokenManagement;
