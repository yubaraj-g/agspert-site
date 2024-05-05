import { TypographyH2 } from "@/components/typography";

export default function HomeAbout() {
  return (
    <div className="w-full flex flex-col gap-4 min-h-96 lg:h-[600px] pt-4" id="about-us">
      <TypographyH2>About Us</TypographyH2>

      <div className="flex grow w-full bg-black/10"></div>
    </div>
  );
}
