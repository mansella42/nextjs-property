import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PropertyPulse | Find the perfect property",
  description: "Find the home for you",
  keywords: "rentals, purchases, home buying, real estate",
};

const mainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default mainLayout;
