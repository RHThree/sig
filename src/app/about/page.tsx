'use client';

import ValueCard from '@/components/ValueCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import theme from '@/theme';

export default function About() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.main,
            mt: '2rem',
          }}
        >
          About Us
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: { xs: 'center', md: 'stretch' },
            gap: '2.5rem' /* Adds space between sections */,
            py: { xs: '2rem', md: '1.75rem' },
            px: { xs: '2.5rem', sm: '12.5vw', md: '1.75rem' },
            mb: '1rem',
          }}
        >
          <ValueCard
            title="Educational Foundation"
            description="The Scarlet Investment Club provides our new member program, which focuses on developing the fundamental skills and knowledge needed to succeed in the financial world through a series of educational lectures, professional speakers, and projects."
          ></ValueCard>
          <ValueCard
            title="Professional Development"
            description="We provide our student body with resources and opportunities to achieve their professional goals through through workshops, mock interviews, and hands on experience through projects and stock pitches."
          ></ValueCard>
          <ValueCard
            title="Collaborative Community"
            description="Our organization was founded on the principles of diversity and inclusion, and we strive to provide a welcoming and inclusive community where students can build their network with other driven individuals."
          ></ValueCard>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.main,
            pt: '2rem',
            pb: '3rem',
            px: { xs: '2.5rem', sm: '10vw', md: '15vw' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.secondary.main,
            }}
          >
            Structure
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.secondary.main,
              marginTop: '1rem',
            }}
          >
            Our members meet on a weekly basis to review market trends, research
            equities, and develop quantitative trading methods. For those
            working on fundamental investment teams, this means conducting
            research and performing financial analysis to pitch stocks for our
            fund. For those working on a quantitative teams, weekly meetings
            consist of building out the components of our algorithms.
          </Typography>
        </Box>
        <Box sx={{ pt: '2rem', pb: '3rem' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: '700',
              color: theme.palette.primary.main,
            }}
          >
            Statistics
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent:
                'space-between' /* Creates space between the sections */,
              alignItems:
                'stretch' /* Ensures all sections have the same height */,
              gap: '0.75rem' /* Adds space between sections */,
              p: '1rem',
              px: { xs: '1rem', sm: '2.5rem' },
              minHeight: '18rem',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                flex: '1',
                backgroundColor: theme.palette.secondary.main,
                px: { xs: '1rem', md: '4rem', lg: '6rem' },
                alignContent: 'center',
              }}
            >
              As a quantitative organization, we have a strong belief that
              numbers can be insightful. Our club encourages members to achieve
              a strong academic performance in addition to their career goals.
              The College of Engineering average GPA is a 3.28, and Fisher's
              College of Business has an average GPA of 3.34. We are proud to
              say that our members have an average GPA of 3.72.
            </Typography>
            <Box
              sx={{
                flex: '1' /* Ensures each section has equal width */,
                display: 'flex', // Enables flexbox
                flexDirection: 'column', // Stack items vertically
                justifyContent: 'space-around', // Distribute items evenly vertically
                backgroundColor: theme.palette.secondary.main,
              }}
            >
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  3.72
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.secondary.contrastText,
                    mt: '0.5rem',
                  }}
                >
                  Average GPA
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  100%
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.secondary.contrastText,
                    marginTop: '0.5rem',
                  }}
                >
                  Internship Placement
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
