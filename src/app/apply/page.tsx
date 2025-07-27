'use client';

import React from 'react';
import { OpenApplication } from '@/components/apply/OpenApplication';
import { IRecruitmentEvent } from '@/types/recruitment';
import { IQuestion } from '@/types/common';

export default function Apply() {
    const semester = 'Spring 2025';
    const dueDate = new Date('2025-01-24T23:59:00');
    const applyLink = 'https://forms.gle/JHoXryjjtg7CCQjW8';
    const recruitmentEvents: IRecruitmentEvent[] = [
        {
            title: 'Info Session',
            subtitle:
                'Come join us and learn more about what SIG has to offer!',
            date: '1/13',
            time: '6:00 PM',
            location: 'Hitchcock 030',
        },
        {
            title: 'Involvement Fair',
            subtitle:
                'Stop by our booth at the involvement fair and talk to some members!',
            date: '1/15',
            time: '4:00-7:00 PM',
            location: 'Ohio Union',
        },
        {
            title: 'Info Session',
            subtitle: 'Another opportunity to learn about SIG!',
            date: '1/16',
            time: '7:00 PM',
            location: 'Lazenby 034',
        },
        {
            title: 'Info Session & Meet the Members',
            subtitle:
                'Learn about SIG and its members from our very own members!',
            date: '1/21',
            time: '7:00 PM',
            location: 'Lazenby 002',
        },
        {
            title: 'Applications Due',
            subtitle: 'Help us learn more about you through our application!',
            date: '1/24',
            time: '11:59 PM',
            location: 'sigosu.com/apply',
        },
        {
            title: 'Interviews',
            subtitle:
                'Selected applicants will be invited to interview with us!',
            date: '1/28 - 1/30',
            time: 'TBD',
            location: 'KBK Center',
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
        <OpenApplication
            semester={semester}
            dueDate={dueDate}
            applyLink={applyLink}
            recruitmentEvents={recruitmentEvents}
            questions={questions}
        />
    );
}
