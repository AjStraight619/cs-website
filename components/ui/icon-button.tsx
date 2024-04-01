import React from "react";
import { Button, ButtonProps } from "./button";

type IconButtonProps = ButtonProps;

const IconButton = (props: IconButtonProps) => {
  return (
    <Button
      className="bg-discordPurple hover:bg-discordPurpleHover"
      size="icon"
      variant={props.variant}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default IconButton;
