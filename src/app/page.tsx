'use client';

import ProjectCard from '@/components/homepageCard';
import theme from '@/theme';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <Box sx={{ height: '90vh', overflow: 'hidden', position: 'relative' }}>
        <Box
          component="img"
          src="fisher-image.jpg"
          alt="Picture of Fisher School of Business"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            backgroundColor: '#36363678',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '2',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'left',
            zIndex: '3',
            whiteSpace: 'nowrap',
            minWidth: '100%',
            ml: '1lh',
          }}
        >
          <Typography
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.main,
            flex: '1',
            minWidth: '200px',
            color: theme.palette.secondary.contrastText,
            textAlign: 'center',
            py: '3rem',
          }}
        >
          <Typography variant="h1">Our Story</Typography>

          <Typography
            variant="h5"
            sx={{ textAlign: 'left', mt: '1.5rem', ml: '4rem', mr: '3rem' }}
          >
            Scarlet Investment Group is a student-run organization at The Ohio
            State University that provides members with the opportunity to learn
            about investing and finance. Our goal is to provide a platform for
            students to learn about investing, network with industry
            professionals, and gain hands-on experience in the financial
            markets. We aim to create a community of like-minded individuals who
            are passionate about investing and finance.
          </Typography>

          <Typography
            variant={'h5'}
            sx={{ textAlign: 'left', mt: '1.5rem', ml: '4rem', mr: '3rem' }}
          >
            In 2023, Scarlet Investment Group was founded on a bus by a group of
            3 students who were passionate about investing, finance, and math.
            Since then, the organization has grown to over 40 members and has
            hosted numerous events, workshops, and speakers.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            flex: '1',
            minWidth: '200px',
          }}
        >
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
