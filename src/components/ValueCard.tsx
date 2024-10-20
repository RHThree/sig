import componentStyle from '@/app/styles/styles.module.css';
import { Box, Typography } from "@mui/material";
import React from "react";

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <Box className={componentStyle.aboutDescriptionSection}>
        <Typography sx={{
            fontSize: {
                xs: "1.2rem",
                sm: "1.4rem",
                md: "1.7rem",
                lg: "1.9rem",
            },
            fontFamily: "Poppins",
            fontWeight: "700",
            color: "#C12222",
            marginTop: "0.5rem",
            }}>
            {title}
        </Typography>
        <Typography sx={{
            fontSize: {
                xs: "0.7rem",
                sm: "0.8rem",
                md: "1rem",
                lg: "1.2rem",
            },
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#000000",
            marginTop: "0.5rem",
            marginLeft: "1rem",
            marginRight: "1rem",
            }}>
            {description}
        </Typography>
    </Box>
  );
};

export default ValueCard;
