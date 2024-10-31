import componentStyle from '@/app/styles/styles.module.css';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface ProjectCardProps {
  description: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ description, imageUrl }) => {
  return (
    <Box
      className={componentStyle.homepageCard}
      sx={{
        pt: '1rem',
        pb: '0.5rem',
        mx: { xs: '2rem', lg: '10%' },
        my: { xs: '3rem', lg: '4rem' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Box className={componentStyle.homepageCardImage} sx={{ pb: '0.5rem' }}>
        <img src={imageUrl || 'fisher-image.jpg'} alt="Project image" />
      </Box>
      <Typography
        variant="h6"
        sx={{
          mx: '1rem',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ProjectCard;
