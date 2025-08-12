import { Box, Button, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import theme from '@/theme';
import { useState } from 'react';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface MobileNavItemProps {
    text: string;
    route: string;
    onNavigate?: (href: string) => void;
}

const MobileNavItem = (props: MobileNavItemProps) => {
    const href = `/${props.route}`;
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button
                variant="text"
                component={Link}
                href={href}
                onClick={(e) => {
                    // Prevent immediate hard navigation so we can control timing
                    e.preventDefault();
                    props.onNavigate?.(href);
                }}
                sx={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    color: theme.palette.secondary.main,
                    textDecoration: 'false',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0',
                        height: '3px',
                        bottom: '0',
                        left: 'auto',
                        backgroundColor: theme.palette.secondary.main,
                        transition: 'width 0.3s ease, left 0.3s ease',
                    },
                    '&:hover::after': {
                        width: '100%',
                        left: 'auto',
                    },
                }}
            >
                {props.text}
            </Button>
        </Box>
    );
};

export const MobileNav: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [pendingHref, setPendingHref] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    React.useEffect(() => {
        if (pendingHref && pathname && pendingHref === pathname) {
            // Now that the route has changed and rendered, close the drawer to animate out
            setOpen(false);
            setPendingHref(null);
        }
    }, [pathname, pendingHref]);

    const handleNavigate = (href: string) => {
        setPendingHref(href);
        // Trigger client-side navigation
        router.push(href);
    };

    return (
        <>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                transitionDuration={{ enter: 500, exit: 500 }}
                ModalProps={{ keepMounted: true }}
                anchor="left"
            >
                <Box
                    sx={{
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: theme.palette.primary.main,
                    }}
                >
                    <Box
                        sx={{
                            ml: 'auto',
                            py: '2rem',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Link
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigate('/');
                            }}
                        >
                            <img
                                src="/OriginalSigLogo.png"
                                alt="Logo"
                                style={{
                                    borderRadius: '50%',
                                    padding: '3px',
                                    backgroundColor: 'white',
                                    maxHeight: '120px',
                                }}
                            />
                        </Link>
                    </Box>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                        }}
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon
                            color="secondary"
                            sx={{ fontSize: '3rem' }}
                        />
                    </IconButton>
                    <MobileNavItem
                        text="About"
                        route="about"
                        onNavigate={handleNavigate}
                    />
                    <MobileNavItem
                        text="EBoard"
                        route="eboard"
                        onNavigate={handleNavigate}
                    />
                    <MobileNavItem
                        text="Placement"
                        route="placement"
                        onNavigate={handleNavigate}
                    />
                    <MobileNavItem
                        text="Apply"
                        route="apply"
                        onNavigate={handleNavigate}
                    />
                </Box>
            </Drawer>

            <Box
                flex={1}
                alignItems="center"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    width: '100vw', // Full viewport width
                    boxSizing: 'border-box', // Ensure padding/margin doesn't affect width
                    display: 'flex',
                    justifyContent: 'center', // Center content horizontally (optional)
                    py: '1rem', // Padding on y-axis
                    px: '2rem',
                }}
            >
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon
                        fontSize="large"
                        sx={{ mr: 'auto', color: theme.palette.secondary.main }}
                    />
                </IconButton>
                <Box sx={{ ml: 'auto' }}>
                    <Link href="/">
                        <img
                            src="/OriginalSigLogo.png"
                            alt="Logo"
                            style={{
                                borderRadius: '50%',
                                padding: '3px',
                                backgroundColor: 'white',
                                maxHeight: '85px',
                            }}
                        />
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default MobileNav;
