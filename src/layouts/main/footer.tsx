import Link from "next/link";
import Image from "next/image";
// import { motion } from "framer-motion";

import {
  // TypographyH1,
  TypographyH2,
  // TypographyH4,
  TypographyMuted,
  TypographySmall,
} from "@/components/typography";
import Template from "../template";

import { Button } from "@/components/ui/button";
import { FeFacebook } from "@/components/icons/facebook";
import { FeInstagram } from "@/components/icons/instagram";
import { MdiLinkedin } from "@/components/icons/linkedin";
import { LineMdTwitterX } from "@/components/icons/x-twitter";

export default function Footer() {
  return (
    <div className="min-h-44 my-12 text-center pt-8">
      <Template>
        <div className="flex lg:flex-row flex-col items-center justify-between gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-3">
            <Image src="/images/agspert-logo.png" alt="agspert" width="200" height="120" />
            <span># 5, Banphool Path, Hatigaon, Guwahati, Assam 781006</span>

            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <Link href="https://www.facebook.com/agspert/">
                <FeFacebook
                  width={26}
                  height={26}
                  className="text-primary cursor-pointer hover:text-blue-600"
                />
              </Link>
              <Link href="https://www.instagram.com/agspeak.in/">
                <FeInstagram
                  width={26}
                  height={26}
                  className="text-primary cursor-pointer hover:text-blue-800"
                />
              </Link>
              <Link href="https://www.linkedin.com/company/agspeak/">
                <MdiLinkedin
                  width={28}
                  height={28}
                  className="text-primary cursor-pointer hover:text-blue-700"
                />
              </Link>
              <Link href="https://twitter.com/AgSpert">
                <LineMdTwitterX
                  width={26}
                  height={26}
                  className="text-primary cursor-pointer hover:text-black"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <TypographyH2>Explore</TypographyH2>

            <ul className="flex md:flex-row flex-col gap-3">
              <li>
                <Link href={"/"}>
                  <Button
                    variant="ghost"
                    className="border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl"
                  >
                    <TypographySmall>Home</TypographySmall>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/value-chain"}>
                  <Button
                    variant="ghost"
                    className="border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl"
                  >
                    <TypographySmall>Value Chain</TypographySmall>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"https://play.google.com/store/apps/details?id=com.agspeak.agspert"}>
                  <Button
                    variant="ghost"
                    className="border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl"
                  >
                    <TypographySmall>Mobile App</TypographySmall>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"https://www.agspeak.in/"}>
                  <Button
                    variant="ghost"
                    className="border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl"
                  >
                    <TypographySmall>Web App</TypographySmall>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Button
                    variant="ghost"
                    className="border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl"
                  >
                    <TypographySmall>Privacy Policy</TypographySmall>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Button
                    variant="ghost"
                    className="border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl"
                  >
                    <TypographySmall>Terms of Service</TypographySmall>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <TypographyMuted className="mt-10">
          Copyright ©2020-24 AgSpert - All Rights Reserved.
        </TypographyMuted>
      </Template>
    </div>
  );
}
