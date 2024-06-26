import { CustomCarousel } from "@/components/custom-carousel";
import { TypographyH2 } from "@/components/typography";

import { WHY } from "@/assets/data/why-us";

export default function HomeWhyAGSpert() {
  return (
    <div className="container w-full flex flex-col items-center gap-4 min-h-96 lg:h-[750px] pt-4">
      <TypographyH2>Why Agspert</TypographyH2>

      <div className="px-0 py-4 w-full">
        <CustomCarousel data={WHY} carouselType={"whyagsperts"} />
      </div>
    </div>
  );
}
