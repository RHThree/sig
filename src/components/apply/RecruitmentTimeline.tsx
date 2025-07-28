'use client';

import React from 'react';
import theme from '@/theme';
import { Box, Typography } from '@mui/material';
import { RecruitmentEvent } from './RecruitmentEvent';
import { IRecruitmentEvent } from '@/types/recruitment';

interface IProps {
    recruitmentEvents: IRecruitmentEvent[];
}

export const RecruitmentTimeline = (props: IProps) => {
    const { recruitmentEvents } = props;

    return (
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
            {recruitmentEvents.map((event, index) => (
                <RecruitmentEvent
                    key={index}
                    title={event.title}
                    subtitle={event.subtitle}
                    dateTime={event.dateTime}
                    duration={event.duration}
                    showDuration={event.showDuration}
                    location={event.location}
                />
            ))}
        </Box>
    );
};
