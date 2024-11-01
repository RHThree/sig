import componentStyle from '@/app/styles/styles.module.css';
import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface MemberCardProps {
  name: string;
  title: string;
  linkedinUrl: string;
  imageUrl: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  title,
  linkedinUrl,
  imageUrl,
}) => {
  return (
    <Box>
      <Box
        component="img"
        sx={{ width: '12.5rem', height: '12.5rem' }}
        alt={`${name} | ${title}`}
        src={imageUrl}
      />
      <Typography
        variant="body1"
        sx={{
          marginTop: '0.5rem',
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: '0.25rem',
        }}
      >
        {title}
      </Typography>
      <Link href={linkedinUrl} target="_blank">
        <IconButton>
          <LinkedInIcon
            color="inherit"
            sx={{ fontSize: '3rem', color: '#0072b1' }}
          />
        </IconButton>
      </Link>
    </Box>
  );
};

export default MemberCard;
