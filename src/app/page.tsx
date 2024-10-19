"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <></>
    </ThemeProvider>
  );
}
