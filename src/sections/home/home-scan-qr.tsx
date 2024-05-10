"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TypographyH1 } from "@/components/typography";
import Template from "@/layouts/template";

import useScreenSize from "@/hooks/use-screen-size";

export default function HomeScanQR() {
  const isDesktop = useScreenSize();
  
  return (
    <Template>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-24 min-h-96 lg:h-[600px] pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.4, delay: 0.15 }}
        >
          <TypographyH1>Let&apos;s go on a journey, please scan QR</TypographyH1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
        >
          <div className="flex grow rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl w-[250px] h-[175px] lg:w-[600px] lg:h-[350px]">
            {isDesktop ? <Image src="/images/scan-qr.jpeg" alt="scan qr" width={600} height={350} /> : <Image src="/images/scan-qr.jpeg" alt="scan qr" width={250} height={175} />}
          </div>
        </motion.div>
      </div>
    </Template>
  );
}
