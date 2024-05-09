"use client";

import * as React from "react";
import AutoPlay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";

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

export function CustomCarousel({ data }: { data: any[] }) {
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
      <CarouselContent className="py-8">
        {DATA.map((item, index) => (
          <CarouselItem key={item + "_" + index} className="md:basis-1/2 lg:basis-1/3 rounded-none">
            <div
              className="p-1 hover:scale-105 transition-all"
              onMouseEnter={() => setIsHover(index + 1)}
              onMouseLeave={() => setIsHover(0)}
            >
              <Card className="rounded-none border-none shadow-xl rounded-tl-3xl rounded-br-3xl transition-all duration-300 line-clamp-2 hover:line-clamp-none">
                <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center text-center p-6">
                  {isHover === index + 1 ? null : (
                    <Template>
                      <TypographyH2 className="transition-all duration-150 min-h-16">
                        {item.heading}
                      </TypographyH2>
                    </Template>
                  )}
                  {isHover === index + 1 ? (
                    // <Template>
                      <TypographyP
                        className={cn(
                          "transition-all duration-200",
                          isHover === index + 1 ? "line-clamp-none text-xl" : "line-clamp-2"
                        )}
                      >
                        {item.details}
                      </TypographyP>
                    // </Template>
                  ) : (
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
