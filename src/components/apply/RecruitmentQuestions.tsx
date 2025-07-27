'use client';

import theme from '@/theme';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Question } from '@/components/Question';
import { IQuestion } from '@/types/common';

interface IProps {
    questions: IQuestion[];
}

export const RecruitmentQuestions = (props: IProps) => {
    return (
        <Box
            sx={{
                color: theme.palette.secondary.contrastText,
                backgroundColor: theme.palette.secondary.main,
                p: { xs: '1rem', sm: '2rem' },
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
            {props.questions.map((q, index) => (
                <Question key={index} question={q.question} answer={q.answer} />
            ))}
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
    );
};
