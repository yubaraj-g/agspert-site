import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import TriangleDownIcon from "@/components/icons/triangle-down";

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
        <Image
          src="/images/agspert-logo-nobg.png"
          alt="agspert"
          width="200"
          height="120"
          className="bg-transparent"
        />
      </Link>

      <nav>
        <ul className="flex gap-6 items-center">
          {/* <li
            className={cn(
              "border-b-2",
              pathname === "/value-chain" ? "border-primary" : "border-transparent"
            )}
          >
            <Link
              href={"/value-chain"}
              className={cn(
                "font-semibold hover:text-primary",
                pathname === "/value-chain" ? "text-primary" : "text-foreground"
              )}
            >
              Value Chain
            </Link>
          </li> */}
          <li
            className={cn(
              "border-b-2 hover:border-primary",
              pathname === "/" ? "border-primary" : "border-transparent"
            )}
          >
            <Link
              href={"/"}
              className={cn(
                "font-semibold hover:text-primary",
                pathname === "/" ? "text-primary" : "text-foreground"
              )}
            >
              Home
            </Link>
          </li>
          <li
            className={cn(
              "border-b-2 hover:border-primary",
              pathname === "/about-us" ? "border-primary" : "border-transparent"
            )}
          >
            <Link
              href={"/about-us"}
              className={cn(
                "font-semibold hover:text-primary",
                pathname === "/about-us" ? "text-primary" : "text-foreground"
              )}
            >
              About Us
            </Link>
          </li>
          <li className="relative border-b-2 border-transparent hover:border-primary">
            <Link
              href={"#"}
              className="font-semibold hover:text-primary flex items-center"
              onMouseEnter={() => setShowChildren(true)}
              // onMouseLeave={() => setShowChildren(false)}
            >
              Our Products
              <TriangleDownIcon />
            </Link>

            {showChildren && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.3 }}
                className="absolute -bottom-8 left-0 bg-white shadow-lg top-8 flex flex-col text-sm min-w-[7.5rem] h-fit"
                onMouseLeave={() => setShowChildren(false)}
              >
                <Link href={"https://play.google.com/store/apps/details?id=com.agspeak.agspert"}>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeIn", duration: 0.3, delay: 0.1 }}
                    className="hover:text-primary hover:transition-all px-4 py-2 hover:bg-primary hover:text-white"
                  >
                    Mobile App
                  </motion.li>
                </Link>
                <Link href={"https://www.agspeak.in/"}>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeIn", duration: 0.3, delay: 0.2 }}
                    className="hover:text-primary hover:transition-all px-4 py-2 hover:bg-primary hover:text-white"
                  >
                    Web App
                  </motion.li>
                </Link>
              </motion.ul>
            )}
          </li>
          <li>
            <Link href={"#contact-us"}>
              <Button className="w-fit rounded-none shadow-xl rounded-tl-xl rounded-br-xl">
                Request Demo
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
