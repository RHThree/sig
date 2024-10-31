'use client';

import theme from '@/theme';
import { Box, Divider, Typography, Stack, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

interface PageLinkProps {
  text: string;
  to: string;
}

const PageLink = (props: PageLinkProps) => {
  return (
    <Box
      sx={{
        fontWeight: 'bold',
        fontSize: '1.125rem',
        '&:hover': {
          color: theme.palette.grey[400],
        },
      }}
    >
      <Link href={`/${props.to}`}>{props.text}</Link>
    </Box>
  );
};

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[500],
        width: '100vw',
        pt: '2.5rem',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          py: '0.5rem',
          color: theme.palette.secondary.main,
        }}
      >
        Scarlet Investment Group
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2 }}
        divider={
          <Divider
            orientation={'vertical'}
            flexItem
            sx={{ backgroundColor: theme.palette.grey[300], width: '0.1rem' }}
          />
        }
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          py: '0.5rem',
        }}
      >
        <PageLink to="" text="home" />
        <PageLink to="about" text="about" />
        <PageLink to="eboard" text="eboard" />
        <PageLink to="placement" text="placement" />
        <PageLink to="apply" text="apply" />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          p: '0.5rem',
        }}
      >
        <Link
          href="https://www.instagram.com/scarletinvestmentgroup"
          target="_blank"
        >
          <IconButton>
            <InstagramIcon color="secondary" sx={{ fontSize: '2.5rem' }} />
          </IconButton>
        </Link>
        <Link
          href="https://www.linkedin.com/company/scarlet-investment-group"
          target="_blank"
        >
          <IconButton>
            <LinkedInIcon color="secondary" sx={{ fontSize: '2.5rem' }} />
          </IconButton>
        </Link>
      </Stack>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          pt: '0.5rem',
          color: theme.palette.secondary.main,
        }}
      >
        sigeboard@buckeyemail.osu.edu
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', color: theme.palette.secondary.main }}
      >
        © 2024 Scarlet Investment Group
      </Typography>
    </Box>
  );
};

export default Footer;
