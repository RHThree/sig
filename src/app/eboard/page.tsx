import MemberCard from "@/components/memberCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import componentStyle from '/src/app/styles/styles.module.css';

export default function Eboard() {
  return (
    <div>
      <header>
      </header>
      <main>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
        <Box className={componentStyle.eboardPage}>
            <Typography sx={{
                fontSize: {
                    xs: "3rem",
                    sm: "3rem",
                  md: "3.5rem",
                  lg: "3.5rem",
                },
                fontFamily: "Poppins",
                fontWeight: "700",
                color: "#C12222",
                marginTop: "2rem",
                }}>
                Executive Board
            </Typography>
            <Box className={componentStyle.eboardMemberGrid}>
                <MemberCard
                    name="Russel Heiser"
                    title="President"
                    linkedinUrl="https://www.linkedin.com/in/russel-heiser-414b73228/"
                    imageUrl="Russel.jpg"
                ></MemberCard>
                <MemberCard
                    name="Ethan Savar"
                    title="VP Quant and Technology"
                    linkedinUrl="https://www.linkedin.com/in/ethan-savar/"
                    imageUrl="Ethan.jpeg"
                ></MemberCard>
                <MemberCard
                    name="Luka Kresja"
                    title="Treasurer"
                    linkedinUrl="https://www.linkedin.com/in/luka-krejsa-a31918262/"
                    imageUrl="Luka.jpg"
                ></MemberCard>
                <MemberCard
                    name="Nathaniel Miller"
                    title="VP Recruitment"
                    linkedinUrl="https://www.linkedin.com/"
                    imageUrl="Nathaniel.jpg"
                ></MemberCard>
                <MemberCard
                    name="Reece Magers"
                    title="VP Education"
                    linkedinUrl="https://www.linkedin.com/in/reece-magers/"
                    imageUrl="fisher-image.jpg"
                ></MemberCard>
                <MemberCard
                    name="Luke Schofield"
                    title="VP Operations"
                    linkedinUrl="https://www.linkedin.com/in/lukeschofield019/"
                    imageUrl="Luke.jpg"
                ></MemberCard>
                <MemberCard
                    name="Joey Slyh"
                    title="VP Marketing"
                    linkedinUrl="https://www.linkedin.com/in/josephslyh/"
                    imageUrl="fisher-image.jpg"
                ></MemberCard>
            </Box>
        </Box>
      </main>
      <footer>
      </footer>
    </div>
  );
}
