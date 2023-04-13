import * as React from 'react';
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <IconButton edge="start" color="inherit" aria-label="back" onClick={onClick}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
