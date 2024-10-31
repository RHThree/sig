import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import theme from '../theme';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Scarlet Investment Group',
  description:
    'Premier Quantitative Finance and Investment Club at The Ohio State University',
  icons: {
    icon: '/Logos/favicon.ico',
  },
};
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* Add favicon link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={poppins.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
