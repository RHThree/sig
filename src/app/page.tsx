"use client";
    
import ProjectCard from "@/components/homepageCard";
import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import componentStyle from './styles/styles.module.css';
import fisherImage from "/public/fisher-image.jpg";

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
                  xs: "1.8rem",
                  sm: "2.4rem",
                  md: "3rem",
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
                    xs: ".7rem",
                    sm: ".9rem",
                    md: "1rem",
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
                    xs: ".7rem",
                    sm: ".9rem",
                    md: "1rem",
                    lg: "1.2rem",
                  },
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#4C4C4C",
                  marginBottom: "3rem",
                }}>
                  In 2023, Scarlet Investment Group was founded on a bus by a group of 3 students who were passionate about investing, finance, and math. Since then, the organization has grown to over 40 members and has hosted numerous events, workshops, and speakers. 
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className = {componentStyle.pageDivRight}>
            <ProjectCard imageUrl="BlackScholesImage.png" description="AU24: Implementing the Black Scholes Model for a Heatmap Project">
            </ProjectCard>
            <ProjectCard imageUrl="PortfolioCompetition.png" description="AU24: Our analysts portfolio competition halfway through the semester">
            </ProjectCard>
          </Box>
        </Box>
      </main>
      <footer>
      </footer>
    </ThemeProvider>
  );
}
