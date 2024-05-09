import { TypographyH2 } from "@/components/typography";
import { CustomCarousel } from "@/components/custom-carousel";

import { BENEFITS } from "@/assets/data/benefits";

export default function HomeBenefits() {
  return (
    <div className="w-full min-h-96 pt-4" id="benefits">
      {/* <TypographyH2>What does AGSpeak provide?</TypographyH2> */}
      <TypographyH2>
        Value Proposition: <span className="text-primary underline">What&apos;s in it for you?</span>
      </TypographyH2>

      <div className="px-0 py-4">
        <CustomCarousel data={BENEFITS} />
      </div>
    </div>
  );
}
