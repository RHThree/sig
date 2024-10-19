import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import theme from '@/theme';
import Link from 'next/link';

interface ItemProps {
  text: string;
  route: string;
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  return (
    <Box>
      <Button
        variant="text"
        sx={{
          fontWeight: 'bold',
          fontSize: '1.25rem',
          width: '100%',
          color: '#fff',
          textDecoration: 'false',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '0',
            height: '3px',
            bottom: '0',
            left: '50%',
            backgroundColor: '#fff', // Color of the underline
            transition: 'width 0.3s ease, left 0.3s ease', // Smooth transition for both width and position
          },
          '&:hover::after': {
            width: '100%', // Expand underline on hover
            left: '0', // Adjust to start from the left
          },
        }}
        href={`/${props.route}`}
      >
        {props.text}
      </Button>
    </Box>
  );
};

export const Navbar: React.FC = () => {
  return (
    <>
      <Box
        flex={1}
        alignItems="center"
        position="sticky"
        sx={{
          backgroundColor: theme.palette.primary.dark,
          width: '100vw', // Full viewport width
          boxSizing: 'border-box', // Ensure padding/margin doesn't affect width
          display: 'flex',
          justifyContent: 'center', // Center content horizontally (optional)
          py: '1rem', // Padding on y-axis
          px: '2rem',
        }}
      >
        <Box sx={{ mr: 'auto' }}>
          <Link href="/">
            <img
              src="/OriginalSigLogo.png"
              alt="Logo"
              style={{
                borderRadius: '50%',
                padding: '3px',
                backgroundColor: 'white',
                maxHeight: '85px',
              }}
            />
          </Link>
        </Box>

        <Stack direction="row" spacing={{ md: 2 }}>
          <Item text="About" route="about" />
          <Item text="Teams" route="teams" />
          <Item text="EBoard" route="eboard" />
          <Item text="Placement" route="placement" />
          <Item text="Apply" route="apply" />
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
