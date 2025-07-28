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
        </Box>
    );
};
