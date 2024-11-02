import theme from '@/theme';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface DarkSectionProps {
  header: string;
  body: string;
  buttonText: string;
  buttonLink: string;
}

export const DarkSection = (props: DarkSectionProps) => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.dark,
        p: '2rem',
        px: { xs: '2rem', md: '6rem' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: theme.palette.secondary.main,
      }}
    >
      <Typography variant="h1" sx={{ py: '1rem', color: 'inherit' }}>
        {props.header}
      </Typography>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', py: '1rem', color: 'inherit' }}
      >
        {props.body}
      </Typography>
      <Button
        variant="contained"
        sx={{ my: '1rem', fontSize: '1.5rem', fontWeight: '600' }}
      >
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScsSz0aP8nFifn27xJKr3t_rY6p5Fn31rfNUyrjwFdhDbsSWg/viewform?usp=sf_link">
          {props.buttonText}
        </Link>
      </Button>
    </Box>
  );
};
