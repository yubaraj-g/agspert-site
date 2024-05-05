// import Image from "next/image";

import MainLayout from "@/layouts/main";
import HomeHero from "../home-hero";
import HomeBenefits from "../home-benefits";
import HomeAbout from "../home-about";
import HomeContact from "../home-contact";
import HomeMap from "../home-map";
import HomeMedia from "../home-media";
import HomePartners from "../home-partners";
import HomeScanQR from "../home-scan-qr";
import HomeWebappFeatures from "../home-webapp";
import HomeWhyAGSpert from "../home-why-agspert";
import Template from "@/layouts/template";

export default function HomeView() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between">
      <MainLayout>
        <Template>
          <HomeHero />
        </Template>

        <Template>
          <HomeBenefits />
        </Template>

        <Template>
          <HomeWebappFeatures />
        </Template>

        <Template>
          <HomePartners />
        </Template>

        <Template>
          <HomeWhyAGSpert />
        </Template>

        <Template>
          <HomeMedia />
        </Template>

        <Template>
          <HomeAbout />
        </Template>

        <Template>
          <HomeScanQR />
        </Template>

        <Template>
          <HomeContact />
        </Template>

        <Template>
          <HomeMap />
        </Template>
      </MainLayout>
    </main>
  );
}
