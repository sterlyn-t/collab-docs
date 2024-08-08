import Link from "next/link";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <div className="flex flex-row items-center">
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="Logo Name"
            width={32}
            height={32}
            className="hidden md:block"
          />
          <h1 className="hidden md:block font-bold text-lg text-white">
            CollabDocs
          </h1>
        </div>
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
