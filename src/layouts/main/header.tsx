import { Fragment, useEffect, useState } from "react";

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
      <div className="min-h-32 flex items-center justify-between">
        {isDesktop ? <NavDesktop /> : <NavMobile />}
      </div>
    </Fragment>
  );
}
