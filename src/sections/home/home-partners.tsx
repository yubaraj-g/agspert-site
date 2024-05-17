"use client";

import Link from "next/link";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

import { TypographyH2 } from "@/components/typography";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { _partners, PartnersType } from "@/assets/partners";
import { _clients } from "@/assets/clients";

export default function HomePartners() {
  const data: PartnersType[] = [..._partners, ..._clients];

  return (
    <div className="w-full flex flex-col items-center gap-4 min-h-36 lg:h-fit pt-4">
      <TypographyH2>Partners & Clients</TypographyH2>

      <div className="flex grow w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[AutoScroll({ playOnInit: true })]}
          className="w-full -mt-3"
        >
          <CarouselContent className="py-8">
            {data.map((item, index) => (
              <CarouselItem
                key={"partner_" + index}
                className="max-w-[250px] rounded-none flex items-center cursor-pointer"
              >
                {item.link && (
                  <Link href={item.link} target="_blank">
                    <div className="p-1 hover:scale-105 transition-all flex items-center">
                      <Card className="transition-all duration-300 w-fit h-fit bg-transparent border-none outline-none shadow-none">
                        <CardContent className="flex items-center !p-0">
                          <Image src={item.image} width={130} height={40} alt={item.alt} />
                        </CardContent>
                      </Card>
                    </div>
                  </Link>
                )}
                {!item.link && (
                  <div className="p-1 hover:scale-105 transition-all flex items-center">
                    <Card className="transition-all duration-300 w-fit h-fit bg-transparent border-none outline-none shadow-none">
                      <CardContent className="flex items-center !p-0">
                        <Image src={item.image} width={130} height={40} alt={item.alt} />
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
