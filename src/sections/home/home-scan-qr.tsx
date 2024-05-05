import { TypographyH2 } from "@/components/typography";

export default function HomeScanQR() {
  return (
    <div className="w-full flex flex-col gap-4 min-h-96 lg:h-[600px] pt-4">
      <TypographyH2>Let&apos;s go on a journey, please scan QR</TypographyH2>

      <div className="flex grow w-full bg-black/10"></div>
    </div>
  );
}
