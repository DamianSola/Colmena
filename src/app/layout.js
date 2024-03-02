import { Raleway } from "next/font/google";
import "./globals.css";


const raleway = Raleway({ subsets: ["latin"] });



export const metadata = {
  title: "Colmena",
  description: "Colmena, espacio + comunidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={raleway.className} >
        {children}
      </body>
    </html>
  );
}
