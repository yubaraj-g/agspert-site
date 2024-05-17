"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";

import { TypographyH2, TypographyH3 } from "@/components/typography";
import { CustomCarousel } from "@/components/custom-carousel";

import { BENEFITS } from "@/assets/data/benefits";
import Template from "@/layouts/template";

// type TabsValuesType = "Supply Chain" | "Brand Story" | "Engagement";

export default function HomeBenefits() {
  // const tabsValues: TabsValuesType[] = ["Supply Chain", "Brand Story", "Engagement"];

  const supplyChain = BENEFITS.filter(
    (item) => item.heading.includes("Boost Efficiency") || item.heading.includes("Reduce Downtime")
  );

  const brandStory = BENEFITS.filter(
    (item) => item.heading.includes("Build Trust") || item.heading.includes("Customer")
  );

  const engagement = BENEFITS.filter(
    (item) =>
      item.heading.includes("Empower Farmers") ||
      item.heading.includes("Industry Leadership") ||
      item.heading.includes("Manage Supplier")
  );

  return (
    <div className="container w-full min-h-96 pt-4 flex flex-col items-center mt-6" id="benefits">
      {/* <TypographyH2>What does AGSpeak provide?</TypographyH2> */}
      {/* <TypographyH2>What&apos;s in it for you?</TypographyH2> */}
      <TypographyH2>Grow your business with Agspeaks unique features</TypographyH2>

      <div className="px-0 py-4 flex justify-center mt-8 max-w-full">
        {/* <CustomCarousel data={BENEFITS} /> */}
        <Template>
          <Tabs defaultValue="Brand Story" className="w-full flex flex-col">
            <TabsList className="grid grid-cols-3 w-full sm:w-5/6 lg:w-1/2 self-center h-fit bg-primary shadow-xl p-2">
              <TabsTrigger
                className="px-4 py-2 text-white data-[state=active]:shadow-xl w-full"
                value="Supply Chain"
              >
                <TypographyH3 className="text-xs">Supply Chain</TypographyH3>
              </TabsTrigger>
              <TabsTrigger
                className="px-4 py-2 text-white data-[state=active]:shadow-xl w-full"
                value="Brand Story"
              >
                <TypographyH3 className="text-xs">Brand Story</TypographyH3>
              </TabsTrigger>
              <TabsTrigger
                className="px-4 py-2 text-white data-[state=active]:shadow-xl w-full"
                value="Engagement"
              >
                <TypographyH3 className="text-xs">Engagement</TypographyH3>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="Supply Chain" className="self-center w-full">
              <CustomCarousel data={[...supplyChain]} carouselType={"benefits"} />
            </TabsContent>
            <TabsContent value="Brand Story" className="self-center w-full">
              <CustomCarousel data={[...brandStory]} carouselType={"benefits"} />
            </TabsContent>
            <TabsContent value="Engagement" className="self-center w-full">
              <CustomCarousel data={[...engagement]} carouselType={"benefits"} />
            </TabsContent>
          </Tabs>
        </Template>
      </div>
    </div>
  );
}
