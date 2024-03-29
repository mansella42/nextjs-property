import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";

const homePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
};

export default homePage;
