import ValueCard from '@/components/ValueCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import componentStyle from '/src/app/styles/styles.module.css';

export default function About() {
  return (
    <>
      <Box className={componentStyle.eboardPage}>
        <Typography
          sx={{
            fontSize: {
              xs: '3rem',
              sm: '3rem',
              md: '3.5rem',
              lg: '3.5rem',
            },
            fontFamily: 'Poppins',
            fontWeight: '700',
            color: '#C12222',
            marginTop: '2rem',
          }}
        >
          About Us
        </Typography>
        <Box className={componentStyle.aboutDescription}>
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
        <Box className={componentStyle.aboutStructure}>
          <Typography
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '2.5rem',
                md: '3rem',
                lg: '3rem',
              },
              fontFamily: 'Poppins',
              fontWeight: '700',
              color: '#FFFFFF',
              marginTop: '2.3%',
            }}
          >
            Structure
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: '0.5rem',
                sm: '0.7rem',
                md: '1rem',
                lg: '1.2rem',
              },
              fontFamily: 'Poppins',
              fontWeight: '400',
              color: '#FFFFFF',
              marginTop: '2%',
              marginLeft: '20%',
              marginRight: '20%',
              marginBottom: '5%',
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
        <Typography
          sx={{
            fontSize: {
              xs: '2.5rem',
              sm: '2.5rem',
              md: '3rem',
              lg: '3rem',
            },
            fontFamily: 'Poppins',
            fontWeight: '700',
            color: '#C12222',
            marginTop: '2.3%',
          }}
        >
          Statistics
        </Typography>
        <Box className={componentStyle.aboutStatistics}>
          <Typography
            className={componentStyle.aboutStatisticsSection}
            sx={{
              fontSize: {
                xs: '0.9rem',
                sm: '0.9rem',
                md: '1.2rem',
                lg: '1.2rem',
              },
              fontFamily: 'Poppins',
              fontWeight: '400',
              color: '#000000',
              marginTop: '4%',
              marginLeft: '7%',
              marginBottom: '5%',
            }}
          >
            As a quantitative organization, we have a strong belief that numbers
            can be insightful. Our club encourages members to achieve a strong
            academic performance in addition to their career goals. The College
            of Engineering average GPA is a 3.28, and Fisher's College of
            Business has an average GPA of 3.34. We are proud to say that our
            members have an average GPA of 3.72.
          </Typography>
          <Box className={componentStyle.aboutStatisticsSection}>
            <Typography
              sx={{
                fontSize: {
                  xs: '2.7rem',
                  sm: '2.7rem',
                  md: '3.5rem',
                  lg: '3.5rem',
                },
                fontFamily: 'Poppins',
                fontWeight: '700',
                color: '#C12222',
                marginTop: '2.3%',
              }}
            >
              3.72
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '0.5rem',
                  sm: '0.7rem',
                  md: '1rem',
                  lg: '1.2rem',
                },
                fontFamily: 'Poppins',
                fontWeight: '400',
                color: '#000000',
                marginTop: '2%',
                marginBottom: '5%',
              }}
            >
              Average GPA
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '2.7rem',
                  sm: '2.7rem',
                  md: '3.5rem',
                  lg: '3.5rem',
                },
                fontFamily: 'Poppins',
                fontWeight: '700',
                color: '#C12222',
                marginTop: '2.3%',
              }}
            >
              100%
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: '0.5rem',
                  sm: '0.7rem',
                  md: '1rem',
                  lg: '1.2rem',
                },
                fontFamily: 'Poppins',
                fontWeight: '400',
                color: '#000000',
                marginTop: '2%',
                marginBottom: '5%',
              }}
            >
              Internship Placement
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
