import CustomForm from "@/components/custom-form";
import { TypographyH1, TypographyH2 } from "@/components/typography";
import Template from "@/layouts/template";

export default function HomeContact() {
  return (
    <div className="container w-full flex flex-col items-center gap-8 min-h-96 lg:h-fit pt-16" id="contact-us">
      <TypographyH2>Get in touch</TypographyH2>

      <div className="flex lg:flex-row flex-col grow w-full gap-16">
        <div className="w-full lg:w-1/2 h-full flex items-start pt-24">
          <Template>
            <TypographyH1 className="!leading-[120%] text-center lg:text-start">For Agricultural Brands That <span className="text-primary">Care!</span></TypographyH1>
          </Template>
        </div>

        <div className="form-wrapper w-full lg:w-1/2 h-full">
          <CustomForm />
        </div>
      </div>
    </div>
  );
}
