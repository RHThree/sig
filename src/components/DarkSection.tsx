import theme from '@/theme';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface DarkSectionProps {
    header: string;
    body: string;
    buttonText?: string;
    buttonLink?: string;
}

export const DarkSection = (props: DarkSectionProps) => {
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.dark,
                p: '2rem',
                px: { xs: '1rem', sm: '2rem', md: '6rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: theme.palette.secondary.main,
            }}
        >
            <Typography variant="h1" sx={{ py: '1rem', color: 'inherit' }}>
                {props.header}
            </Typography>
            <Typography
                variant="h4"
                sx={{ textAlign: 'center', py: '1rem', color: 'inherit' }}
            >
                {props.body}
            </Typography>
            {props.buttonText && props.buttonLink && (
                <Button
                    variant="contained"
                    sx={{ my: '1rem', fontSize: '1.5rem', fontWeight: '600' }}
                >
                    <Link href={props.buttonLink} target="_blank">
                        {props.buttonText}
                    </Link>
                </Button>
            )}
        </Box>
    );
};
