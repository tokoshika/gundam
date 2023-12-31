import { Inter } from "next/font/google";
import { Noto_Sans_JP } from '@next/font/google';
import "./globals.css";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Nav />
        <hr></hr>
        {children}
      </body>
    </html>
  );
}
