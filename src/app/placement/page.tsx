'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import componentStyle from '/src/app/styles/styles.module.css';
import theme from '@/theme';

export default function Placement() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          p: '2rem',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          Placement
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              lg: '1fr 1fr 1fr',
              xl: '1fr 1fr 1fr 1fr',
            },
            gap: '5rem',
            ml: 'auto',
            mr: 'auto',
            justifyItems: 'center',
            pt: '1rem',
          }}
        >
          <Image
            src="/Logos/Riverwest-Partners.jpg"
            alt="Company 1"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
          <Image
            src="/Logos/Parker-Hannifin.png"
            alt="Company 2"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
          <Image
            src="/Logos/JP-Morgan-Chase.png"
            alt="Company 3"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
          <Image
            src="/Logos/Immuta.png"
            alt="Company 4"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
          <Image
            src="/Logos/Big-Kitty-Labs.png"
            alt="Company 5"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
          <Image
            src="/Logos/Hackett-Consulting.png"
            alt="Company 6"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
          <Image
            src="/Logos/Lockheed-Martin.png"
            alt="Company 7"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
          <Image
            src="/Logos/Clearpact.png"
            alt="Company 8"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
          <Image
            src="/Logos/P&G.png"
            alt="Company 9"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
          <Image
            src="/Logos/Atwell.jpg"
            alt="Company 10"
            width={250}
            height={150}
            className={componentStyle.logoImage}
          />
        </Box>
      </Box>
    </>
  );
}
