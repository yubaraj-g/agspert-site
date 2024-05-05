import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function NavDesktop() {
  return (
    <>
      <Link href={"/"}>
        <Image src="/agspert-logo.png" alt="agspert" width="200" height="120" />
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
