import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/NavBar/Index";
import Footer from "@/Components/Footer/Index";
import Head from "next/head";


const raleway = Raleway({ subsets: ["latin"] });



export const metadata = {
  title: "Colmena",
  description: "Colmena, espacio + comunidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel='icon' href= "./favicon.ico"/>
      </Head>
      <body className={raleway.className} >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
