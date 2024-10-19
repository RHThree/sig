import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import fisherImage from "./images/fisher-image.jpg";
import componentStyle from './styles/styles.module.css';

export default function Home() {
  return (
    <div>
      <header>
      </header>
      <main className={componentStyle.pageBody}>
        <Box className={componentStyle.fisherImageContainer}>
          <Image
            src={fisherImage}
            layout="responsive"
            width="960"
            height="380"
            alt="Picture of Fisher School of Business"
            className={componentStyle.fisherImage}
          />
          <div className={componentStyle.tintOverlay}></div>
          <div className={componentStyle.textOverlay}>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
            <Box>
              <Typography className={componentStyle.welcomeTextgray} sx={{
                fontSize: {
                  xs: "1.7rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#3D3939",
              }}>
                Welcome to
              </Typography>
            </Box>
            <Box>
              <Typography className={componentStyle.welcomeTextscarlet} sx={{
                fontSize: {
                  xs: "1.7rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#C21111",
              }}>
                Scarlet Investment Group
              </Typography>
            </Box>
          </div>
        </Box>
        <Box className={componentStyle.pageContent}>
        <Typography variant="h2" sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
            fontFamily: "Poppins",
            fontWeight: "700",
            color: "#000000",
            textAlign: "center",
            margin: "1em 0",
          }}>
            Our Mission
          </Typography>
          <Box className={componentStyle.card}>
            <Typography sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.5rem",
              },
              fontFamily: "Poppins",
              color: "#555555",
              textAlign: "left",
            }}>
              The Scarlet Investment Group is dedicated to educating members about the financial markets, investment strategies, and personal finance management. We aim to foster a collaborative environment where students can learn from each other, participate in hands-on investment projects, and connect with industry professionals.
            </Typography>
          </Box>
          
          <Typography variant="h2" sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
            fontFamily: "Poppins",
            fontWeight: "700",
            color: "#000000",
            textAlign: "center",
            margin: "1em 0",
          }}>
            Join Us
          </Typography>
          <Box className={componentStyle.card}>
            <Typography sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.5rem",
              },
              fontFamily: "Poppins",
              color: "#555555",
              textAlign: "left",
            }}>
              We welcome students from all backgrounds and skill levels. Whether you're a seasoned investor or just starting, there's a place for you in our community. Join us for our upcoming events, workshops, and networking sessions to kickstart your investment journey!
            </Typography>
          </Box>
          
          <Typography variant="h2" sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
            fontFamily: "Poppins",
            fontWeight: "700",
            color: "#000000",
            textAlign: "center",
            margin: "1em 0",
          }}>
            Upcoming Events
          </Typography>
          <Box className={componentStyle.card}>
            <Typography sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.5rem",
              },
              fontFamily: "Poppins",
              color: "#555555",
              textAlign: "left",
            }}>
              Stay tuned for our next event! We will be hosting a workshop on stock analysis and investment strategies on [date]. Check our social media or website for updates on events and activities!
            </Typography>
          </Box>
        </Box>
      </main>
      <footer>
      </footer>
    </div>
  );
}
