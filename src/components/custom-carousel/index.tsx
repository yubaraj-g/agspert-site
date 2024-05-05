"use client";

import * as React from "react";
import AutoPlay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

import { TypographyH3, TypographyP } from "../typography";

export function CustomCarousel({ data }: { data: any[] }) {
  const DATA = [...data];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[AutoPlay({ delay: 3500 })]}
      className="w-full -mt-3"
    >
      <CarouselContent className="py-8">
        {DATA.map((item, index) => (
          <CarouselItem key={item + "_" + index} className="md:basis-1/2 lg:basis-1/3 rounded-none">
            <div className="p-1 hover:scale-105 transition-all">
              <Card className="rounded-none border-none shadow-xl rounded-tl-3xl rounded-br-3xl">
                <CardContent className="flex flex-col aspect-square items-center justify-center text-center p-6">
                  <TypographyH3>{item.heading}</TypographyH3>
                  <TypographyP>{item.details}</TypographyP>
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
