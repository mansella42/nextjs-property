import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find the perfect property",
  description: "Find the home for you",
  keywords: "rentals, purchases, home buying, real estate",
};

const mainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default mainLayout;
