import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-full">
          <div className="leftContainer h-[100vh] md:w-[18vw] border-2 border-cyan-700">
            <Sidebar />
          </div>

          <div className="rightcontainer border-2 md:w-[82vw] border-cyan-700">
            <Navbar />

            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
