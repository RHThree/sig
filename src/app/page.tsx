"use client";
    
import ProjectCard from "@/components/homepageCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import componentStyle from './styles/styles.module.css';
import fisherImage from "/public/fisher-image.jpg";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <header>
      </header>
      <main className={componentStyle.pageBody}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
        <Box className={componentStyle.fisherImageContainer}>
          <Image
            src={fisherImage}
            layout="fill"
            objectFit="cover"
            alt="Picture of Fisher School of Business"
            className={componentStyle.fisherImage}
          />
          <div className={componentStyle.tintOverlay}></div>
          <div className={componentStyle.textOverlay}>
            <Box>
              <Typography className={componentStyle.homepageHeader} sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "4rem",
                  lg: "5rem",
                },
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#FFFFFF",
              }}>
                Welcome to
              </Typography>
            </Box>
            <Box>
              <Typography sx={{
                fontSize: {
                  xs: "5rem",
                  sm: "5.7rem",
                  md: "6.2rem",
                  lg: "7rem",
                },
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#C12222",
                }}>
                Scarlet
              </Typography>
              <Typography sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "4rem",
                  lg: "5rem",
                },
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#FFFFFF",
              }}>
                Investment Group
              </Typography>
            </Box>
          </div>
        </Box>
        <Box className={componentStyle.pageDiv}>
          <Box className = {componentStyle.pageDivLeft}>
            <Box className={componentStyle.homepageHeader}>
              <Typography sx={{
                fontSize: {
                  xs: "1.3rem",
                  sm: "1.8rem",
                  md: "2.6rem",
                  lg: "3.2rem",
                },
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "#4C4C4C",
              }}>
                Our Story
              </Typography>
              <Box className={componentStyle.homepageBody}>
                <Typography sx={{
                  fontSize: {
                    xs: ".5rem",
                    sm: ".7rem",
                    md: ".9rem",
                    lg: "1.2rem",
                  },
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#4C4C4C",
                }}>
                  Scarlet Investment Group is a student-run organization at The Ohio State University that provides members with the opportunity to learn about investing and finance. Our goal is to provide a platform for students to learn about investing, network with industry professionals, and gain hands-on experience in the financial markets. We aim to create a community of like-minded individuals who are passionate about investing and finance.
                </Typography>
              </Box>
              <Box className={componentStyle.homepageBody}>
                <Typography sx={{
                  fontSize: {
                    xs: ".5rem",
                    sm: ".7rem",
                    md: ".9rem",
                    lg: "1.2rem",
                  },
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#4C4C4C",
                }}>
                  Scarlet Investment Group is a student-run organization at The Ohio State University that provides members with the opportunity to learn about investing and finance. Our goal is to provide a platform for students to learn about investing, network with industry professionals, and gain hands-on experience in the financial markets. We aim to create a community of like-minded individuals who are passionate about investing and finance.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className = {componentStyle.pageDivRight}>
            <ProjectCard imageUrl="fisher-image.jpg" description="This is a description for project1. Click Here to learn more.">
            </ProjectCard>
            <ProjectCard imageUrl="fisher-image.jpg" description="This is a description for project2. Click Here to learn more.">
            </ProjectCard>
          </Box>
        </Box>
      </main>
      <footer>
      </footer>
    </ThemeProvider>
  );
}
