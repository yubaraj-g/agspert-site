"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { TypographyH2, TypographyH3 } from "@/components/typography";
import { CustomCarousel } from "@/components/custom-carousel";

import { BENEFITS } from "@/assets/data/benefits";

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
    <div className="w-full min-h-96 pt-4" id="benefits">
      {/* <TypographyH2>What does AGSpeak provide?</TypographyH2> */}
      <TypographyH2>
        Value Proposition:{" "}
        <span className="text-primary underline">What&apos;s in it for you?</span>
      </TypographyH2>

      <div className="px-0 py-4 flex justify-center mt-8">
        {/* <CustomCarousel data={BENEFITS} /> */}
        <Tabs defaultValue="Supply Chain" className="w-full flex flex-col">
          <TabsList className="flex flex-col items-center sm:grid sm:grid-cols-3 w-full sm:w-5/6 lg:w-1/2 self-center h-fit bg-primary shadow-xl p-2">
            <TabsTrigger className="px-6 py-3 text-white data-[state=active]:shadow-xl w-full" value="Supply Chain">
              <TypographyH3>Supply Chain</TypographyH3>
            </TabsTrigger>
            <TabsTrigger className="px-6 py-3 text-white data-[state=active]:shadow-xl w-full" value="Brand Story">
              <TypographyH3>Brand Story</TypographyH3>
            </TabsTrigger>
            <TabsTrigger className="px-6 py-3 text-white data-[state=active]:shadow-xl w-full" value="Engagement">
              <TypographyH3>Engagement</TypographyH3>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Supply Chain" className="self-center">
            <CustomCarousel data={[...supplyChain]} carouselType={"benefits"} />
          </TabsContent>
          <TabsContent value="Brand Story" className="self-center">
            <CustomCarousel data={[...brandStory]} carouselType={"benefits"} />
          </TabsContent>
          <TabsContent value="Engagement" className="self-center">
            <CustomCarousel data={[...engagement]} carouselType={"benefits"} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
