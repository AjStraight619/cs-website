import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SectionDivider } from "./section-divider";

type IntroCardProps = {
  name: string;
  description?: string;
  image: string;
  position: string;
};

export const IntroCard = ({
  name,
  description,
  image,
  position,
}: IntroCardProps) => {
  return (
    <Card className="min-w-[16rem]">
      <CardHeader className="flex items-center justify-center w-full p-3">
        {image ? (
          <Image
            src={image}
            alt="headshot"
            width="192"
            height="192"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.2rem] border-white shadow-xl"
          />
        ) : (
          <IoPersonCircleOutline className="w-24 h-24" />
        )}
        <CardTitle>{position}</CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>

      <CardContent></CardContent>
    </Card>
  );
};
