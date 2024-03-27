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
      <CardHeader className="flex items-center justify-center">
        <div>
          {image ? (
            <Image src={image} alt="headshot" width={100} height={100} />
          ) : (
            <IoPersonCircleOutline className="w-24 h-24" />
          )}
        </div>
        <CardTitle>{position}</CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>

      <CardContent></CardContent>
    </Card>
  );
};
