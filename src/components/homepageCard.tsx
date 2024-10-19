import componentStyle from '@/app/styles/styles.module.css';
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  description: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ description, imageUrl }) => {
  return (
    <Box className={componentStyle.homepageCard}>
      <Box className={componentStyle.homepageCardImage}>
        <img
          src={imageUrl || 'fisher-image.jpg'}
          alt="Project image"
        />
      </Box>
      <Typography
        sx={{
          fontSize: {
            xs: ".5rem",
            sm: ".7rem",
            md: ".9rem",
            lg: "1.2rem",
          },
          fontFamily: "Poppins",
          fontWeight: "400",
          color: "#4C4C4C",
          marginLeft: "1.5rem",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ProjectCard;
