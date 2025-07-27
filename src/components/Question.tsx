import React from 'react';
import Typography from '@mui/material/Typography';

interface QuestionProps {
  question: string;
  answer: string;
}

export const Question = (props: QuestionProps) => {
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
