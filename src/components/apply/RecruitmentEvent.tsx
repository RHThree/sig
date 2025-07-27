'use client';

import { IRecruitmentEvent } from '@/types/recruitment';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

export const RecruitmentEvent = (props: IRecruitmentEvent) => {
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
