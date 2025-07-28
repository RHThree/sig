'use client';

import { IRecruitmentEvent } from '@/types/recruitment';
import saveAs from 'file-saver';
import { createEvent, EventAttributes } from 'ics';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { IconButton } from '@mui/material';
import React from 'react';

type DateOnlyRecruitmentEvent = Omit<IRecruitmentEvent, 'dateTime'> & {
    dateTime: Date;
};

export const AddToCalendar = (props: DateOnlyRecruitmentEvent) => {
    const { dateTime, duration, title, subtitle, location } = props;

    const event: EventAttributes = {
        start: [
            dateTime.getFullYear(),
            dateTime.getMonth() + 1, // Month is 0-indexed in JavaScript
            dateTime.getDate(),
            dateTime.getHours(),
            dateTime.getMinutes(),
        ],
        ...(duration
            ? { duration: { minutes: duration } }
            : { duration: { days: 1 } }), // 👈 default to all day if no duration
        title: title,
        description: subtitle,
        location: location,
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
    };

    const handleDownloadICS = () => {
        createEvent(event, (error, value) => {
            if (error) {
                console.error('Failed to generate .ics file:', error);
                return;
            }

            const blob = new Blob([value], {
                type: 'text/calendar;charset=utf-8',
            });
            const fileName = `${props.title.replace(/\s+/g, '_')}.ics`;
            saveAs(blob, fileName);
        });
    };

    return (
        <IconButton onClick={handleDownloadICS}>
            <CalendarMonthIcon fontSize="large" />
        </IconButton>
    );
};
