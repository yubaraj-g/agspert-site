import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export default function NavDesktop() {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  const pathname = usePathname();

  const buttonRef = useRef<any>(null);

  window.document.addEventListener("hover", (e) => {
    if (e.target !== buttonRef.current) {
      setShowChildren(false);
    }
  });

  return (
    <>
      <Link href={"/"}>
        <Image src="/images/agspert-logo.png" alt="agspert" width="200" height="120" />
      </Link>

      <nav>
        <ul className="flex gap-4 items-center">
          <li className={cn("border-b-2", pathname === "/value-chain" ? "border-primary" : "border-transparent")}>
            <Link
              href={"/value-chain"}
              className={cn("font-semibold", pathname === "/value-chain" ? "text-primary" : "text-muted-foreground")}
            >
              Value Chain
            </Link>
          </li>
          <li className={cn("border-b-2", pathname === "/about-us" ? "border-primary" : "border-transparent")}>
            <Link href={"/about-us"}
            className={cn("font-semibold", pathname === "/about-us" ? "text-primary" : "text-muted-foreground")}
            >About Us</Link>
          </li>
          <li className="relative">
            <Link href={"#"}>
              <Button
                className="font-semibold w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl bg-transparent text-black/70 hover:bg-black/5"
                onMouseEnter={() => setShowChildren(true)}
                // onMouseLeave={() => setShowChildren(false)}
              >
                Our Products
              </Button>
            </Link>

            {showChildren && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.3 }}
                className="absolute -bottom-10 left-0 bg-white shadow-lg p-4 top-10 flex flex-col gap-4 text-sm min-w-[7.5rem] h-fit rounded-tl-xl rounded-br-xl"
                onMouseLeave={() => setShowChildren(false)}
              >
                <Link href={"https://play.google.com/store/apps/details?id=com.agspeak.agspert"}>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeIn", duration: 0.3, delay: 0.1 }}
                    className="hover:text-primary hover:transition-all"
                  >
                    Mobile App
                  </motion.li>
                </Link>
                <Link href={"https://www.agspeak.in/"}>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeIn", duration: 0.3, delay: 0.2 }}
                    className="hover:text-primary hover:transition-all"
                  >
                    Web App
                  </motion.li>
                </Link>
              </motion.ul>
            )}
          </li>
          <li>
            <Link href={"#contact-us"}>
              <Button className="w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl bg-black shadow-black/50 hover:bg-black/75">
                Request Demo
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
