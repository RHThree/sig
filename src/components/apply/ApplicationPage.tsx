'use client';

import { DarkSection } from '@/components/DarkSection';
import React from 'react';
import { IRecruitmentEvent } from '@/types/recruitment';
import { IQuestion } from '@/types/common';
import { RecruitmentTimeline } from './RecruitmentTimeline';
import { RecruitmentQuestions } from './RecruitmentQuestions';
import { getMonthDayString } from '@/utils/get-month-day-string';

interface IProps {
    semester: string; // Spring 2025, etc.
    openDate: Date; // When the application opens
    dueDate: Date;
    applyLink: string; // Link to the application form
    recruitmentEvents: IRecruitmentEvent[];
    questions: IQuestion[]; // Array of questions for the FAQ section
}

export const ApplicationPage = (props: IProps) => {
    const {
        semester,
        dueDate,
        applyLink,
        recruitmentEvents,
        questions,
        openDate,
    } = props;

    const isBeforeOpen = new Date() < openDate;
    const isApplicationOpen = !isBeforeOpen && new Date() < dueDate;

    const formattedDueTime = dueDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
    const formattedDueDate = getMonthDayString(dueDate);
    const formattedOpenDate = getMonthDayString(openDate);

    const closedMessage = isBeforeOpen
        ? `Please check back on ${formattedOpenDate} when it opens. In the meantime, feel free to check out our recruitment event schedule below!`
        : `Please check back before next semester starts for updates on future applications.`;

    return (
        <>
            {isApplicationOpen ? (
                <DarkSection
                    header="Applications"
                    body={`Our ${semester} Application is now open! Applications are due by ${formattedDueTime} on ${formattedDueDate} and require attendance of an info session. Click below to apply!`}
                    buttonText="Apply"
                    buttonLink={applyLink}
                />
            ) : (
                <DarkSection
                    header="Applications"
                    body={`Our ${semester} Application is currently closed. ${closedMessage}`}
                />
            )}
            <RecruitmentTimeline recruitmentEvents={recruitmentEvents} />
            <RecruitmentQuestions questions={questions} />
        </>
    );
};
