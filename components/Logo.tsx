import React from "react";
import Image from "next/image";

type LogoProps = {
  variant?: "default" | "icon";
};

const Logo = ({ variant = "default" }: LogoProps) => {
  return (
    <a href="" className="">
      {variant === "default" ? (
        <Image
          src="/assets/logo.svg"
          alt="AnalytiX logo"
          width={150}
          height={31}
        />
      ) : (
        <Image
          src="/assets/logo.svg"
          alt="AnalytiX logo"
          width={32}
          height={32}
        />
      )}
    </a>
  );
};

export default Logo;
