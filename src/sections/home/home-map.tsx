import { TypographyH2 } from "@/components/typography";

export default function HomeMap() {
  return (
    <div className="w-full flex flex-col gap-8 lg:min-h-96 lg:h-[600px] pt-4">
      <TypographyH2 className="container">Where to find us?</TypographyH2>

      <div
        className="flex grow w-full shadow-2xl shadow-primary/40"
        // style={{
        //   background: "linear-gradient(158deg, rgba(255, 255, 255,1) 25%, rgba(22,163,74,0.5) 100%)",
        // }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8491530447573!2d91.7840408762538!3d26.136460977118404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a591f4b8ec983%3A0xf5841fbf322e1fcf!2sAgSpert!5e0!3m2!1sen!2sin!4v1714893803302!5m2!1sen!2sin"
          className="border-none w-full lg:h-full min-h-64"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
