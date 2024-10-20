import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import componentStyle from '/src/app/styles/styles.module.css';

export default function Placement() {
  return (
    <div>
      <header>
      </header>
      <main>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
        <Box className={componentStyle.companyLogosPage}>
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
            </Typography>
            <Box className={componentStyle.companyLogosGrid}>
                <Image src="/Logos/Riverwest-Partners.jpg" alt="Company 1" width={250} height={150} className={componentStyle.logoImage} />
                <Image src="/Logos/Parker-Hannifin.png" alt="Company 2" width={250} height={150} className={componentStyle.logoImage} />
                <Image src="/Logos/JP-Morgan-Chase.png" alt="Company 3" width={250} height={150} className={componentStyle.logoImage} />
                <Image src="/Logos/Immuta.png" alt="Company 4" width={250} height={150} className={componentStyle.logoImage} />
                <Image src="/Logos/Big-Kitty-Labs.png" alt="Company 5" width={250} height={150} className={componentStyle.logoImage} />
                <Image src="/Logos/Hackett-Consulting.png" alt="Company 6" width={250} height={150} className={componentStyle.logoImage} />
                <Image src="/Logos/Lockheed-Martin.png" alt="Company 7" width={250} height={150} className={componentStyle.logoImage} />
                <Image src="/Logos/Clearpact.png" alt="Company 8" width={250} height={150} className={componentStyle.logoImage} />
                <Image src="/Logos/P&G.png" alt="Company 9" width={250} height={150} className={componentStyle.logoImage} />
                <Image src="/Logos/Atwell.jpg" alt="Company 10" width={250} height={150} className={componentStyle.logoImage} />
            </Box>
        </Box>
      </main>
      <footer>
      </footer>
    </div>
  );
}
