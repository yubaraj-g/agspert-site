import Link from "next/link";
import Image from "next/image";
// import { motion } from "framer-motion";

import {
  // TypographyH1,
  // TypographyH2,
  TypographyH3,
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
    <div className="container min-h-56 my-12 text-center pt-8 h-full">
      <Template className="h-full">
        <div className="flex lg:flex-row flex-col items-center lg:items-start justify-between gap-6 h-full">
          <div className="flex flex-col items-center justify-between lg:items-start text-center lg:text-start gap-3 h-full lg:min-h-56">
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <Image src="/images/agspert-logo-nobg.png" alt="agspert" width="200" height="120" />
              <span># 5, Banphool Path, Hatigaon, Guwahati, Assam 781006</span>
            </div>

            <TypographyMuted className="hidden lg:block">
              Copyright ©2020-24 AgSpert - All Rights Reserved.
            </TypographyMuted>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start">
            <TypographyH3 className="text-start pl-0 lg:pl-4">Explore</TypographyH3>

            <ul className="flex flex-col gap-3 items-start w-full">
              <li className="w-full">
                <Link href={"/"} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl flex justify-center lg:justify-start"
                  >
                    <TypographySmall>Home</TypographySmall>
                  </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link href={"/value-chain"} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl flex justify-center lg:justify-start"
                  >
                    <TypographySmall>Value Chain</TypographySmall>
                  </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link href={"/privacy-policy"} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl flex justify-center lg:justify-start"
                  >
                    <TypographySmall>Privacy Policy</TypographySmall>
                  </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link href={"/terms-of-service"} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl flex justify-center lg:justify-start"
                  >
                    <TypographySmall>Terms of Service</TypographySmall>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start">
            <TypographyH3 className="text-start pl-0 lg:pl-4">Our Platform</TypographyH3>

            <ul className="flex flex-col gap-3 items-start w-full">
              <li className="w-full">
                <Link
                  href={"https://play.google.com/store/apps/details?id=com.agspeak.agspert"}
                  className="w-full"
                >
                  <Button
                    variant="ghost"
                    className="w-full border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl flex justify-center lg:justify-start"
                  >
                    <TypographySmall>Mobile App</TypographySmall>
                  </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link href={"https://www.agspeak.in/"} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full border-l-2 border-b-2 border-transparent hover:border-green-250 hover:shadow-xl hover:border-b-2 hover:border-l-2 rounded-none rounded-tl-xl rounded-br-xl flex justify-center lg:justify-start"
                  >
                    <TypographySmall>Web App</TypographySmall>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <TypographyH3 className="text-center lg:text-start">Social Links</TypographyH3>
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

          <TypographyMuted className="block lg:hidden">
            Copyright ©2020-24 AgSpert - All Rights Reserved.
          </TypographyMuted>
        </div>
      </Template>
    </div>
  );
}
