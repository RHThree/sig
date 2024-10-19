"use client";

import { useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";
import { useTheme } from "@mui/material/styles";
import MobileNav from "./MobileNav";

export const Header = () => {
    const theme = useTheme(); // Get the theme object
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is 'sm' or smaller
    
    return (
        <>
            {isMobile ? <MobileNav /> : <Navbar />}
        </>
    );
}

export default Header;