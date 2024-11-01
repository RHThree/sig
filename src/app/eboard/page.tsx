'use client';

import MemberCard from '@/components/memberCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import componentStyle from '/src/app/styles/styles.module.css';
import theme from '@/theme';

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
          ></MemberCard>
          <MemberCard
            name="Ethan Savar"
            title="VP Quant"
            linkedinUrl="https://www.linkedin.com/in/ethan-savar"
            imageUrl="Ethan.jpeg"
          ></MemberCard>
          <MemberCard
            name="Luka Kresja"
            title="Treasurer"
            linkedinUrl="https://www.linkedin.com/in/luka-krejsa-a31918262/"
            imageUrl="Luka.jpg"
          ></MemberCard>
          <MemberCard
            name="Nathaniel Miller"
            title="VP Recruitment"
            linkedinUrl="https://www.linkedin.com/in/nathanielbmiller1/"
            imageUrl="Nathaniel.jpg"
          ></MemberCard>
          <MemberCard
            name="Reece Magers"
            title="VP Membership Development"
            linkedinUrl="https://www.linkedin.com/in/reece-magers"
            imageUrl="Reece.jpeg"
          ></MemberCard>
          <MemberCard
            name="Luke Schofield"
            title="VP Operations"
            linkedinUrl="https://www.linkedin.com/in/lukeschofield019"
            imageUrl="Luke.jpg"
          ></MemberCard>
          <MemberCard
            name="Joey Slyh"
            title="VP Marketing"
            linkedinUrl="https://www.linkedin.com/in/josephslyh"
            imageUrl="Joey.jpg"
          ></MemberCard>
        </Box>
      </Box>
    </>
  );
}
