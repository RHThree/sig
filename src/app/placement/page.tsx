'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import theme from '@/theme';
import React from 'react';

interface CompanyProps {
    src: string;
    alt: string;
}

const Company = (props: CompanyProps) => {
    return (
        <Box
            component="img"
            src={props.src}
            alt={props.alt}
            sx={{
                width: '250px',
                height: '150px',
                objectFit: 'contain',
                display: 'block',
                m: '0 auto',
            }}
        />
    );
};

export default function Placement() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    p: '2rem',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: theme.palette.primary.main,
                    }}
                >
                    Placement
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr 1fr',
                            xl: '1fr 1fr 1fr 1fr',
                        },
                        gap: { xs: '2.5rem', md: '2.8rem', lg: '5rem' },
                        mx: 'auto',
                        justifyItems: 'center',
                        pt: '1rem',
                    }}
                >
                    <Company
                        src="/Logos/JP-Morgan-Chase.png"
                        alt="JP Morgan Chase"
                    />
                    <Company src="/Logos/Epic.svg" alt="Epic" />
                    <Company src="/Logos/Palantir.png" alt="Palantir" />
                    <Company
                        src="/Logos/Lockheed-Martin.png"
                        alt="Lockheed Martin"
                    />
                    <Company src="/Logos/P&G.png" alt="Procter & Gamble" />
                    <Company
                        src="/Logos/SherwinWilliams.webp"
                        alt="Sherwin Williams"
                    />
                    <Company
                        src="/Logos/MelCapPartners.jpg"
                        alt="MelCap Partners"
                    />
                    <Company
                        src="/Logos/UnionHomeMortgage.png"
                        alt="Union Home Mortgage"
                    />
                    <Company
                        src="/Logos/Parker-Hannifin.png"
                        alt="Parker Hannifin"
                    />
                    <Company src="/Logos/Immuta.png" alt="Immuta" />
                    <Company
                        src="/Logos/Hackett-Consulting.png"
                        alt="The Hackett Group"
                    />
                    <Company src="/Logos/Clearpact.png" alt="Clearpact" />
                </Box>
            </Box>
        </>
    );
}
