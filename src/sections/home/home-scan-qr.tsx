"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TypographyH1 } from "@/components/typography";
import Template from "@/layouts/template";

import useScreenSize from "@/hooks/use-screen-size";
import { useEffect, useState } from "react";

export default function HomeScanQR() {
  const isDesktop = useScreenSize();

  const [desk, setDesk] = useState(false);

  useEffect(() => {
    setDesk(isDesktop);
  }, [isDesktop]);

  return (
    <Template>
      <div className="container w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-24 min-h-96 lg:h-[600px] pt-6 lg:pt-12 pb-6 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.4, delay: 0.15 }}
        >
          <TypographyH1 className="text-center lg:text-start">Let&apos;s go on a journey, please scan QR</TypographyH1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
          className="w-full h-full"
        >
          <div className="flex grow rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl w-full min-h-56 lg:w-[750px] lg:h-[450px]">
            {desk ? (
              <Image src="/images/scan-qr-3.jpeg" alt="scan qr" width={750} height={450} />
            ) : (
              <img src="/images/scan-qr-3.jpeg" alt="scan qr" className="w-full" />
            )}
          </div>
        </motion.div>
      </div>
    </Template>
  );
}
