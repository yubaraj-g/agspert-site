import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { Backward, Hamburger } from "@/components/icons";
import { TypographyH3 } from "@/components/typography";
import { Button } from "@/components/ui/button";

import { listType, navList } from "../list";
import { capitalizeWords } from "@/lib/capitalize-words";

export default function NavMobile() {
  const [isNav, setIsNav] = useState<boolean>(false);

  const LIST: listType[] = [...navList];

  return (
    <>
      <Link href={"/"}>
        <Image src="/images/agspert-logo-nobg.png" alt="agspert" width="200" height="120" />
      </Link>

      <Button variant="ghost" className="text-primary" onClick={() => setIsNav((prev) => !prev)}>
        <Hamburger width="24" height="24" />
      </Button>

      <div
        className={cn(
          "fixed top-0 h-dvh w-screen transition-all duration-700 grid place-items-end z-40 backdrop-blur-sm",
          isNav ? "right-0 bg-black/50" : "-right-[1200px] bg-black/0"
        )}
        onClick={() => setIsNav(false)}
      >
        <div
          className="bg-white w-4/5 h-full py-12 px-4 transition-all flex flex-col gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <Link href={"/"} onClick={() => setIsNav(false)}>
              {/* <TypographyH2>LOGO</TypographyH2> */}
              <Image src="/images/agspert-logo.png" alt="agspert" width="200" height="120" />
            </Link>

            <Button variant="ghost" onClick={() => setIsNav(false)}>
              <Backward width="24" height="24" />
            </Button>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {LIST.map((item, index) => (
              <Link
                href={item.link}
                key={`nav-item-${index}`}
                onClick={() => setIsNav(false)}
                className="hover:text-primary transition-all"
              >
                <div className="py-2">
                  <TypographyH3>{capitalizeWords(item.name)}</TypographyH3>
                </div>
              </Link>
            ))}

            {/* <div className="relative">
              <Link href={"#"}>
                <Button className="w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl">
                  Our Products
                </Button>
              </Link>
            </div> */}
            <Button className="w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
