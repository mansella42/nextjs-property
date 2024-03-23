import React from "react";
import Link from 'next/link';

const homePage = () => {
  return <div>
    <h1 className="text-5xl">Welcome</h1>
      <Link href="/properties">Show properties</Link>
  </div>;
};

export default homePage;
