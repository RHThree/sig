'use client';

import { DarkSection } from '@/components/DarkSection';
import React from 'react';
import { IRecruitmentEvent } from '@/types/recruitment';
import { IQuestion } from '@/types/common';
import { RecruitmentTimeline } from './RecruitmentTimeline';
import { RecruitmentQuestions } from './RecruitmentQuestions';

interface IProps {
    semester: string; // Spring 2025, etc.
    dueDate: Date;
    applyLink: string; // Link to the application form
    recruitmentEvents: IRecruitmentEvent[];
    questions: IQuestion[]; // Array of questions for the FAQ section
}

export const OpenApplication = (props: IProps) => {
    const { semester, dueDate, applyLink, recruitmentEvents, questions } =
        props;
    const formattedDueTime = dueDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
    // Helper to add ordinal suffix to day
    function getOrdinalSuffix(day: number) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    const month = dueDate.toLocaleString('en-US', { month: 'long' });
    const day = dueDate.getDate();
    const formattedDueDate = `${month} ${day}${getOrdinalSuffix(day)}`;

    return (
        <>
            <DarkSection
                header="Applications"
                body={`Our ${semester} Application is now open! Applications are due by ${formattedDueTime} on ${formattedDueDate} and require attendance of an info session. Click below to apply!`}
                buttonText="Apply"
                buttonLink={applyLink}
            />
            <RecruitmentTimeline recruitmentEvents={recruitmentEvents} />
            <RecruitmentQuestions questions={questions} />
        </>
    );
};
