import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tonkeeper Battery",
  description: "Tonkeeper Battery Web Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={inter.className}
        className="sm:px-24 md:px-32 lg:px-48 xl:px-64 2xl:px-96"
      >
        {children}
      </body>
    </html>
  );
}
