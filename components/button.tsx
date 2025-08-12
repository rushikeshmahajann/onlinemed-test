import { cn } from "@/lib/utils";
import React from "react";

type buttonProps = {
  onClick: () => void;
  title: string;
  className?: string;
  disabled?: boolean;
};

const Button = ({ onClick, title, className, disabled}: buttonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        "font-satoshi max-w-4/6 lg:max-w-full lg:min-w-32 inline-flex justify-center pt-2.5 pb-3 px-6 bg-blue-500 text-white font-medium text-lg rounded-lg hover:bg-blue-500/90 transition-colors ease-in-out cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
