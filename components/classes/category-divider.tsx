import React from "react";
import { Separator } from "../ui/separator";

const CategoryDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-4 text-left font-roboto_condensed text-3xl underline underline-offset-2">
      {children}
    </div>
  );
};

export default CategoryDivider;
