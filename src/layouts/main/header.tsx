import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";

import useScreenSize from "@/hooks/use-screen-size";

import NavDesktop from "./navbar/desktop";
import NavMobile from "./navbar/mobile";

export default function Header() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const screenMediumUp: boolean = useScreenSize();

  useEffect(() => {
    setIsDesktop(screenMediumUp);
  }, [screenMediumUp]);

  return (
    <Fragment>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="min-h-28 flex items-center justify-between w-full"
      >
        {isDesktop ? <NavDesktop /> : <NavMobile />}
      </motion.div>
    </Fragment>
  );
}
