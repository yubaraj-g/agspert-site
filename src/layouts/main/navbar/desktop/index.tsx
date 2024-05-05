import Link from "next/link";

import { TypographyH2 } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default function NavDesktop() {
  return (
    <>
      <Link href={"/"}>
        <TypographyH2>LOGO</TypographyH2>
      </Link>

      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href={"#about-us"}>About Us</Link>
          </li>
          <li>
            <Button className="w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl">
              Request Demo
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
