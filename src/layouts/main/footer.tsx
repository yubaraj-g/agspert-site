import Link from "next/link";
import Image from "next/image";
// import { motion } from "framer-motion";

import {
  // TypographyH1,
  TypographyH2,
  TypographyH4,
  TypographyMuted,
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
            {/* <TypographyH1 className="text-primary">LOGO</TypographyH1> */}
            <Image src="/agspert-logo.png" alt="agspert" width="200" height="120" />
            <span># 5, Banphool Path, Hatigaon, Guwahati, Assam 781006</span>
            {/* some social media links */}

            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <FeFacebook
                width={26}
                height={26}
                className="text-primary cursor-pointer hover:text-blue-600"
              />
              <FeInstagram
                width={26}
                height={26}
                className="text-primary cursor-pointer hover:text-blue-800"
              />
              <MdiLinkedin
                width={28}
                height={28}
                className="text-primary cursor-pointer hover:text-blue-700"
              />
              <LineMdTwitterX
                width={26}
                height={26}
                className="text-primary cursor-pointer hover:text-black"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <TypographyH2>Explore</TypographyH2>

            <ul className="flex md:flex-row flex-col gap-3">
              <li>
                <Link href={"/"}>
                  <Button
                    variant="ghost"
                    className="hover:bg-green-600 hover:text-white rounded-none"
                  >
                    <TypographyH4 className="">Home</TypographyH4>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Button
                    variant="ghost"
                    className="hover:bg-green-600 hover:text-white rounded-none"
                  >
                    <TypographyH4 className="">Mobile App</TypographyH4>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Button
                    variant="ghost"
                    className="hover:bg-green-600 hover:text-white rounded-none"
                  >
                    <TypographyH4 className="">Entreprise Login</TypographyH4>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Button
                    variant="ghost"
                    className="hover:bg-green-600 hover:text-white rounded-none"
                  >
                    <TypographyH4 className="">Privacy Policy</TypographyH4>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Button
                    variant="ghost"
                    className="hover:bg-green-600 hover:text-white rounded-none"
                  >
                    <TypographyH4 className="">Terms of Service</TypographyH4>
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
