'use client';

import { IRecruitmentEvent } from '@/types/recruitment';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { AddToCalendar } from './AddToCalendar';

export const RecruitmentEvent = (props: IRecruitmentEvent) => {
    const {
        dateTime,
        duration,
        title,
        subtitle,
        location,
        showDuration = true,
    } = props;
    const thm = useTheme();
    const smallScreen = useMediaQuery(thm.breakpoints.down('sm'));
    const hasCalendarEvent = dateTime instanceof Date;
    let date: string, time: string;

    if (typeof dateTime === 'string') {
        // If dateTime is a string, convert it to a Date object
        date = dateTime;
        time = 'TBD';
    } else {
        date = dateTime.toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
        });
        const startTime = dateTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        if (duration && showDuration) {
            // If duration is provided and showDuration is true, calculate the end time
            const endTime = new Date(dateTime.getTime() + duration * 60000);
            time = `${startTime} - ${endTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}`;
        } else {
            // If no duration is provided or showDuration is false, just show the start time
            time = startTime;
        }
    }

    return (
        <>
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    pt: '1rem',
                    px: { xs: '0rem', md: '4rem' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                }}
            >
                {date} {smallScreen ? <br /> : ' - '} {props.title}
                {hasCalendarEvent && (
                    <AddToCalendar
                        dateTime={dateTime}
                        duration={duration}
                        title={title}
                        subtitle={subtitle}
                        location={location}
                    />
                )}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'center',
                    px: { xs: '0rem', md: '4rem' },
                }}
            >
                {time} @ {props.location}
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'center',
                    px: { xs: '0rem', md: '4rem' },
                    pb: '1rem',
                }}
            >
                {props.subtitle}
            </Typography>
        </>
    );
};
