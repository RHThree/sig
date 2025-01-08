'use client';

import MemberCard from '@/components/memberCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import theme from '@/theme';
import React from 'react';

export default function Eboard() {
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
          padding: '2rem',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          Executive Board
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridGap: '2rem',
            px: '1rem',
            pt: '3rem',
            mx: '3vw',
            gridTemplateColumns: {
              xs: '1fr', // 1 column on extra-small screens
              sm: '1fr 1fr', // 2 columns on small screens
              md: '1fr 1fr 1fr', // 3 columns on medium screens and above
              xl: '1fr 1fr 1fr 1fr', // 4 columns on large screens and above
            },
          }}
        >
          <MemberCard
            name="Russel Heiser"
            title="President"
            linkedinUrl="https://www.linkedin.com/in/russelheiser"
            imageUrl="Russel.jpg"
          />
          <MemberCard
            name="Ryan Walsh"
            title="Executive VP"
            linkedinUrl="https://www.linkedin.com/in/ryan-walsh-088050305/"
            imageUrl="Ryan.png"
          />
          <MemberCard
            name="Cole Gibson"
            title="VP Quant"
            linkedinUrl="https://www.linkedin.com/in/cole-gibson5/"
            imageUrl="Cole.jpg"
          />
          <MemberCard
            name="Joey Glukh"
            title="VP Fundamental"
            linkedinUrl="https://www.linkedin.com/in/josephglukh/"
            imageUrl="Joey.jpeg"
          />
          <MemberCard
            name="Jack Hunyh"
            title="VP Membership Development"
            linkedinUrl="https://www.linkedin.com/in/jakcrushuynh/"
            imageUrl="Jack.jpg"
          />
          <MemberCard
            name="Gabby Raney"
            title="VP Marketing"
            linkedinUrl="https://www.linkedin.com/in/gabriellaraney/"
            imageUrl="Gabby.jpg"
          />
          <MemberCard
            name="Quinn Moore"
            title="VP Recruitment"
            linkedinUrl="https://www.linkedin.com/in/quinn-moore-5a2ab523a/"
            imageUrl="Quinn.png"
          />
          <MemberCard
            name="Luke Schofield"
            title="VP Operations"
            linkedinUrl="https://www.linkedin.com/in/lukeschofield019"
            imageUrl="Luke.jpg"
          />
          <MemberCard
            name="Akshay Kollur"
            title="Treasurer"
            linkedinUrl="https://www.linkedin.com/in/akshaykollur/"
            imageUrl="Akshay.jpeg"
          />
        </Box>
      </Box>
    </>
  );
}
