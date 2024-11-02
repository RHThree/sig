'use client';

import { DarkSection } from '@/components/DarkSection';
import theme from '@/theme';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

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
        body="We have completed our recruitment process for the Autumn 2024 Semester.
        We encourge you to check back here at the start of the Spring 2025
        Semester and apply!"
        buttonText="Apply"
        buttonLink=""
      />
      <Box
        sx={{
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          p: '2rem',
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
