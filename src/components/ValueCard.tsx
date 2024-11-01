import componentStyle from '@/app/styles/styles.module.css';
import theme from '@/theme';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <Box
      sx={{
        flex: '1' /* Ensures each section has equal width */,
        padding: '1.25rem',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '0.75rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: '700',
          color: theme.palette.primary.main,
          marginTop: '0.5rem',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: '0.5rem',
          mx: '1rem',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ValueCard;
