'use client';

import ProjectCard from '@/components/homepageCard';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import componentStyle from './styles/styles.module.css';
import fisherImage from '/public/fisher-image.jpg';

export default function Home() {
  return (
    <>
      <Box className={componentStyle.fisherImageContainer}>
        <Image
          src={fisherImage}
          layout="fill"
          objectFit="cover"
          alt="Picture of Fisher School of Business"
          className={componentStyle.fisherImage}
        />
        <div className={componentStyle.tintOverlay}></div>
        <div className={componentStyle.textOverlay}>
          <Box>
            <Typography
              className={componentStyle.homepageHeader}
              sx={{
                fontSize: {
                  xs: '2.5rem',
                  sm: '3.9rem',
                  md: '5rem',
                },
                fontWeight: '700',
                color: theme.palette.secondary.main,
              }}
            >
              Welcome to
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: '4rem',
                  sm: '5.5rem',
                  md: '7rem',
                },
                fontWeight: '700',
                color: theme.palette.primary.main,
              }}
            >
              Scarlet
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '2.5rem',
                  sm: '3.9rem',
                  md: '5rem',
                },
                fontFamily: 'Poppins',
                fontWeight: '700',
                color: theme.palette.secondary.main,
              }}
            >
              Investment Group
            </Typography>
          </Box>
        </div>
      </Box>
      <Box className={componentStyle.pageDiv}>
        <Box className={componentStyle.pageDivLeft}>
          <Box sx={{ my: { xs: '3rem', sm: '4rem' } }}>
            <Typography variant="h1">Our Story</Typography>
            <Box className={componentStyle.homepageBody}>
              <Typography variant="h5">
                Scarlet Investment Group is a student-run organization at The
                Ohio State University that provides members with the opportunity
                to learn about investing and finance. Our goal is to provide a
                platform for students to learn about investing, network with
                industry professionals, and gain hands-on experience in the
                financial markets. We aim to create a community of like-minded
                individuals who are passionate about investing and finance.
              </Typography>
            </Box>
            <Box className={componentStyle.homepageBody}>
              <Typography variant={'h5'}>
                In 2023, Scarlet Investment Group was founded on a bus by a
                group of 3 students who were passionate about investing,
                finance, and math. Since then, the organization has grown to
                over 40 members and has hosted numerous events, workshops, and
                speakers.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={componentStyle.pageDivRight}>
          <ProjectCard
            imageUrl="BlackScholesImage.png"
            description="Implementing the Black Scholes Model for a Heatmap Project"
          />
          <ProjectCard
            imageUrl="PortfolioCompetition.png"
            description="Our analysts portfolio competition halfway through the semester"
          />
        </Box>
      </Box>
    </>
  );
}
