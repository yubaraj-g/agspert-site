"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import AutoPlay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

import {
  // TypographyH1,
  TypographyH2,
  // TypographyH3,
  TypographyP,
} from "../typography";
import Template from "@/layouts/template";

interface CustomCarouselProps {
  data: any[];
  carouselType: "benefits" | "whyagsperts";
}

export function CustomCarousel({ data, carouselType }: CustomCarouselProps) {
  const DATA = [...data];

  const [isHover, setIsHover] = React.useState<number>(0); // 0 will be default and it will indicate false value for line clamp.

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={
        carouselType !== "whyagsperts" && carouselType !== "benefits"
          ? [AutoPlay({ delay: 4000 })]
          : []
      }
      className="w-full -mt-3"
    >
      <CarouselContent className="m-0 py-8 w-full lg:flex-row flex-col">
        {DATA.map((item, index) => (
          <CarouselItem
            key={item + "_" + index}
            className={cn(
              "md:basis-1/2 rounded-none w-full",
              carouselType === "benefits" ? "lg:basis-1/2" : "lg:basis-1/3"
            )}
          >
            <div
              className="p-1 transition-all w-full"
              onMouseEnter={() => setIsHover(index + 1)}
              onMouseLeave={() => setIsHover(0)}
            >
              <Card className="rounded-none border-none bg-transparent shadow-none rounded-tl-3xl rounded-br-3xl transition-all duration-300 line-clamp-2 hover:line-clamp-none max-w-full">
                <CardContent className="flex flex-col gap-4 items-center justify-center text-center p-6 max-w-full relative aspect-square">
                  <motion.div
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.75,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="w-full"
                  >
                    <div
                      className={cn(
                        "w-full h-40 overflow-hidden relative flex rounded-2xl border",
                        carouselType === "benefits" ? "sm:h-96" : "sm:h-72",
                        isHover === index + 1 ? "scale-[1.01] transition-all" : ""
                      )}
                    >
                      <Image src={item.image} alt={item.heading} layout="fill" />
                    </div>
                  </motion.div>

                  {carouselType === "benefits" && (
                    <>
                      <TypographyH2 className="transition-all duration-150 min-h-16 mt-10">
                        {item.heading}
                      </TypographyH2>
                      <TypographyP
                        className={cn(
                          "transition-all duration-200 !mt-0 line-clamp-none lg:line-clamp-2",
                          isHover === index + 1 ? "lg:line-clamp-none" : ""
                        )}
                      >
                        {item.details}
                      </TypographyP>
                    </>
                  )}

                  {carouselType === "whyagsperts" && (
                    <>
                      <TypographyH2 className="transition-all duration-150 min-h-16 mt-6">
                        {item.heading}
                      </TypographyH2>
                      <TypographyP
                        className={cn(
                          "transition-all duration-200 !mt-0 line-clamp-none lg:line-clamp-2",
                          isHover === index + 1 ? "lg:line-clamp-none" : ""
                        )}
                      >
                        {item.details}
                      </TypographyP>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
