import componentStyle from '@/app/styles/styles.module.css';
import { Box, Typography } from "@mui/material";
import React from "react";

interface MemberCardProps {
    name: string;
    title: string;
    linkedinUrl: string;
    imageUrl: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, title, linkedinUrl, imageUrl }) => {
  return (
    <Box>
      <Box>
        <img
          src={imageUrl}
          alt={name + " | " + title}
          width="200px"
          height="200px"
          />
      </Box>
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "#4C4C4C",
          marginTop: "0.8rem",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
            fontSize: "1.2rem",
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#4C4C4C",
            marginTop: "0.8rem",
            marginBottom: "3rem",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default MemberCard;
