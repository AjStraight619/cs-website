import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const Header = () => {
  return (
    <Card className="bg-blueGreen-1 shadow-gray-300 shadow-sm">
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent className="flex md:flex-row flex-col items-center justify-between gap-4">
        <Image
          src="/headshot.svg"
          alt="headshot"
          width={150}
          height={150}
          className="object-cover p-1 rounded-full bg-gray-100"
          priority={true}
          quality={100}
        />

        <p className="md:text-lg text-xs">
          Manju Muralidharan has a Master's Degree in Computer Science from
          Illinois Institute of Technology, Chicago and a Bachelors degree in
          Computer Engineering from Anna University, India, She started her
          career as a Web Developer for Oracle Financial Services Software in
          Bangalore, India.
        </p>
      </CardContent>
    </Card>
  );
};

export default Header;
