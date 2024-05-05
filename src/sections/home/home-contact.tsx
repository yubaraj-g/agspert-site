import CustomForm from "@/components/custom-form";
import { TypographyH1, TypographyH2 } from "@/components/typography";
import Template from "@/layouts/template";

export default function HomeContact() {
  return (
    <div className="w-full flex flex-col gap-4 min-h-96 lg:h-[500px] pt-4" id="contact-us">
      <TypographyH2>Get in touch</TypographyH2>

      <div className="flex grow w-full gap-16">
        <div className="w-1/2 h-full flex items-start pt-24">
          <Template>
            <TypographyH1>For Agricultural Brands That Care!</TypographyH1>
          </Template>
        </div>

        <div className="form-wrapper w-1/2 h-full">
          <CustomForm />
        </div>
      </div>
    </div>
  );
}
