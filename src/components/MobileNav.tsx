import { Box, Button, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import theme from '@/theme';
import { useState } from 'react';

interface MobileNavItemProps {
  text: string;
  route: string;
}

const MobileNavItem = (props: MobileNavItemProps) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Button
        variant="text"
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
            backgroundColor: theme.palette.secondary.main, // Color of the underline
            transition: 'width 0.3s ease, left 0.3s ease', // Smooth transition for both width and position
          },
          '&:hover::after': {
            width: '100%', // Expand underline on hover
            left: 'auto', // Adjust to start from the left
          },
        }}
        href={`/${props.route}`}
      >
        {props.text}
      </Button>
    </Box>
  );
};

export const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          transitionDuration={{ enter: 500, exit: 500 }}
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
              <Link href="/">
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
              sx={{ position: 'absolute', top: '1rem', right: '1rem' }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon color="secondary" sx={{ fontSize: '3rem' }} />
            </IconButton>
            <MobileNavItem text="About" route="about" />
            <MobileNavItem text="Teams" route="teams" />
            <MobileNavItem text="EBoard" route="eboard" />
            <MobileNavItem text="Placement" route="placement" />
            <MobileNavItem text="Apply" route="apply" />
          </Box>
        </Drawer>
      )}
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
