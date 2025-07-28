'use client';

import React from 'react';
import { ApplicationPage } from '@/components/apply/ApplicationPage';
import { IRecruitmentEvent } from '@/types/recruitment';
import { IQuestion } from '@/types/common';

export default function Apply() {
    const semester = 'Autumn 2025';
    const openDate = new Date('2025-08-24T00:00:00');
    const dueDate = new Date('2025-09-12T23:59:59');
    const applyLink = 'https://forms.gle/JHoXryjjtg7CCQjW8';
    const recruitmentEvents: IRecruitmentEvent[] = [
        {
            title: 'Involvement Fair',
            subtitle:
                'Stop by our booth at the involvement fair and talk to some members!',
            dateTime: new Date('2025-08-24T16:00:00'),
            duration: 180,
            location: 'Oval',
        },
        {
            title: 'Info Session',
            subtitle:
                'Come join us and learn more about what SIG has to offer!',
            dateTime: new Date('2025-08-28T18:00:00'),
            duration: 60,
            showDuration: false,
            location: 'Houston Grove Room',
        },
        {
            title: 'Info Session',
            subtitle: 'Another opportunity to learn about SIG!',
            dateTime: new Date('2025-09-02T18:00:00'),
            duration: 60,
            showDuration: false,
            location: 'House 1874 Room',
        },
        {
            title: 'Info Session',
            subtitle: 'Last standalone info session!',
            dateTime: new Date('2025-09-04T18:00:00'),
            duration: 60,
            showDuration: false,
            location: 'Houston Grove Room',
        },
        {
            title: 'Info Session & Meet the Members',
            subtitle:
                'Learn about SIG and its members from our very own members!',
            dateTime: new Date('2025-09-09T19:00:00'),
            duration: 60,
            showDuration: false,
            location: 'Houston 1874 Room',
        },
        {
            title: 'Resume Workshop',
            subtitle:
                'Create or improve your resume with the help of our members!',
            dateTime: new Date('2025-09-11T19:00:00'),
            duration: 60,
            showDuration: false,
            location: 'Busch Valor Room',
        },
        {
            title: 'Applications Due',
            subtitle: 'Help us learn more about you through our application!',
            dateTime: new Date('2025-09-12T23:59:59'),
            location: 'sigosu.com/apply',
        },
        {
            title: 'Interviews',
            subtitle:
                'Selected applicants will be invited to interview with us!',
            dateTime: '9/17 - 9/19',
            location: 'TBD',
        },
    ];
    const questions: IQuestion[] = [
        {
            question: 'What does the application process look like?',
            answer: 'Prior to the application deadline, there are info sessions, networking opportunities, and a resume workshop. The application itself requires a resume, some responses to questions, and general info about yourself. If selected to move on after the application, you will undergo an interview process. Decisions will be made shortly after.',
        },
        {
            question: 'What do you look for in an applicant?',
            answer: "Although we don't require strict experience in finance/investing, we do look for a passion for learning and a willingness to work hard. We also look for strong communication skills as it is very important to be able to explain your ideas as an interdisciplinary organization. For those interested in the quant side, we highly prefer coding experience as many of our projects are hands-on.",
        },
    ];

    return (
        <ApplicationPage
            semester={semester}
            openDate={openDate}
            dueDate={dueDate}
            applyLink={applyLink}
            recruitmentEvents={recruitmentEvents}
            questions={questions}
        />
    );
}
