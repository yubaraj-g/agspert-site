"use client";

import * as React from "react";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
      plugins={[AutoPlay({ delay: 4000 })]}
      className="w-full -mt-3"
    >
      <CarouselContent className="m-0 py-8 w-full lg:flex-row flex-col">
        {DATA.map((item, index) => (
          <CarouselItem
            key={item + "_" + index}
            className={cn(
              "md:basis-1/2 rounded-none",
              carouselType === "benefits" ? "lg:basis-1/2" : "lg:basis-1/3"
            )}
          >
            <div
              className="p-1 hover:scale-105 transition-all"
              onMouseEnter={() => setIsHover(index + 1)}
              onMouseLeave={() => setIsHover(0)}
            >
              <Card className="rounded-none border-none shadow-xl rounded-tl-3xl rounded-br-3xl transition-all duration-300 line-clamp-2 hover:line-clamp-none max-w-full">
                <CardContent className="flex flex-col gap-4 items-center justify-center text-center p-6 max-w-full relative aspect-square">
                  {isHover === index + 1 ? null : (
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
                          "w-full h-40 overflow-hidden relative flex rounded-tl-2xl rounded-br-2xl",
                          carouselType === "benefits" ? "sm:h-96 shadow-xl" : "sm:h-72"
                        )}
                      >
                        <Image src={item.image} alt={item.heading} layout="fill" />
                      </div>
                      <TypographyH2 className={cn("transition-all duration-150 min-h-16", carouselType === "benefits" ? "mt-10" : "mt-6")}>
                        {item.heading}
                      </TypographyH2>
                    </motion.div>
                  )}
                  {isHover === index + 1 ? (
                    <TypographyP
                      className={cn(
                        "transition-all duration-200",
                        isHover === index + 1 ? "line-clamp-none text-xl" : "line-clamp-2"
                      )}
                    >
                      {item.details}
                    </TypographyP>
                  ) : (
                    isHover !== index + 1 &&
                    carouselType === "benefits" && (
                      <Template>
                        <TypographyP
                          className={cn(
                            "transition-all duration-200",
                            isHover === index + 1 ? "line-clamp-none" : "line-clamp-2"
                          )}
                        >
                          {item.details}
                        </TypographyP>
                      </Template>
                    )
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
