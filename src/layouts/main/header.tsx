import { Fragment, useEffect, useState } from "react";
import {
  motion,
  // useScroll
} from "framer-motion";

import useScreenSize from "@/hooks/use-screen-size";

import NavDesktop from "./navbar/desktop";
import NavMobile from "./navbar/mobile";

export default function Header() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const screenMediumUp: boolean = useScreenSize();

  // const { scrollYProgress, scrollY } = useScroll();
  // console.log(scrollYProgress, scrollY);

  useEffect(() => {
    setIsDesktop(screenMediumUp);
  }, [screenMediumUp]);

  return (
    <Fragment>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="fixed top-0 left-0 z-30 bg-white/60 backdrop-blur-md shadow-md min-h-28 flex items-center justify-between !w-screen self-stretch"
      >
        <div className="container flex justify-between items-center">
          {isDesktop ? <NavDesktop /> : <NavMobile />}
        </div>
      </motion.div>
    </Fragment>
  );
}
