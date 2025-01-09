'use client';

import { DarkSection } from '@/components/DarkSection';
import theme from '@/theme';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

interface RecruitmentEventProps {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
}

const RecruitmentEvent = (props: RecruitmentEventProps) => {
  const thm = useTheme();
  const smallScreen = useMediaQuery(thm.breakpoints.down('sm'));

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          pt: '1rem',
          px: { xs: '0rem', md: '4rem' },
        }}
      >
        {props.date} {smallScreen ? <br /> : ' - '} {props.title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          px: { xs: '0rem', md: '4rem' },
        }}
      >
        {props.time} @ {props.location}
      </Typography>
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', px: { xs: '0rem', md: '4rem' }, pb: '1rem' }}
      >
        {props.subtitle}
      </Typography>
    </>
  );
};

const Question = (props: QuestionProps) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'left',
          p: '1rem',
          px: { xs: '0rem', md: '4rem' },
        }}
      >
        {props.question}
      </Typography>
      <Typography
        variant="h5"
        sx={{ textAlign: 'left', px: { xs: '0rem', md: '4rem' }, pb: '1rem' }}
      >
        {props.answer}
      </Typography>
    </>
  );
};

export default function Apply() {
  return (
    <>
      <DarkSection
        header="Applications"
        body="Our Spring 2025 Application is now open! Applications are due by 11:59 PM on January 24th and require attendance of an info session. Click below to apply!"
        buttonText="Apply"
        buttonLink="https://forms.gle/JHoXryjjtg7CCQjW8"
      />
      <Box
        sx={{
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          p: { xs: '1rem', sm: '2rem' },
          py: '3rem',
          pb: '0rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.main,
            textAlign: 'center',
            width: '100%',
          }}
        >
          Recruiting Timeline
        </Typography>
        <RecruitmentEvent
          title="Info Session"
          subtitle="Come join us and learn more about what SIG has to offer!"
          date="1/13"
          time="6:00 PM"
          location="Hitchcock 030"
        />
        <RecruitmentEvent
          title="Involvement Fair"
          subtitle="Stop by our booth at the involvement fair and talk to some members!"
          date="1/15"
          time="4:00-7:00 PM"
          location="Ohio Union"
        />
        <RecruitmentEvent
          title="Info Session"
          subtitle="Another opportunity to learn about SIG!"
          date="1/16"
          time="7:00 PM"
          location="Lazenby 034"
        />
        <RecruitmentEvent
          title="Info Session & Meet the Members"
          subtitle="Learn about SIG and its members from our very own members!"
          date="1/21"
          time="7:00 PM"
          location="Lazenby 002"
        />
        <RecruitmentEvent
          title="Applications Due"
          subtitle="Help us learn more about you through our application!"
          date="1/24"
          time="11:59 PM"
          location="sigosu.com/apply"
        />
        <RecruitmentEvent
          title="Interviews"
          subtitle="Selected applicants will be invited to interview with us!"
          date="1/28 - 1/30"
          time="TBD"
          location="KBK Center"
        />
      </Box>
      <Box
        sx={{
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          p: { xs: '1rem', sm: '2rem' },
          py: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.main,
            textAlign: 'center',
            width: '100%',
          }}
        >
          FAQs
        </Typography>
        <Question
          question={'What does the application process look like?'}
          answer={
            'Prior to the application deadline, there are info sessions, networking opportunities, and a resume workshop. The application itself requires a resume, some responses to questions, and general info about yourself. If selected to move on after the application, you will undergo an interview process. Decisions will be made shortly after.'
          }
        />
        <Question
          question={'What do you look for in an applicant?'}
          answer={
            "Although we don't require strict experience in finance/investing, we do look for a passion for learning and a willingness to work hard. We also look for strong communication skills as it is very important to be able to explain your ideas as an interdisciplinary orgnaization. For those interested in the quant side, we highly prefer coding experience as many of our projects are hands-on."
          }
        />
      </Box>
    </>
  );
}
