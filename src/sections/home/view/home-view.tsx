// import Image from "next/image";
// import { Suspense, lazy } from "react";

import MainLayout from "@/layouts/main";
import HomeHero from "../home-hero";
import HomeBenefits from "../home-benefits";
// import HomeAbout from "../home-about";
import HomeContact from "../home-contact";
import HomeMap from "../home-map";
import HomeSupportedBy from "../home-supported-by";
import HomePartners from "../home-partners";
import HomeScanQR from "../home-scan-qr";
import HomeWhyAGSpert from "../home-why-agspert";
import Template from "@/layouts/template";
import HomeMedia from "../home-media";
import HomeClients from "../home-clients";

// const HomeWebappFeatures = lazy(() => import("../home-webapp"));

export default function HomeView() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between overflow-x-hidden z-0 w-full">
      <MainLayout>
        <Template>
          <HomeHero />
        </Template>

        <Template>
          <HomeBenefits />
        </Template>

        {/* <Template>
          <Suspense fallback={<>Loading</>}>
            <HomeWebappFeatures />
          </Suspense>
        </Template> */}

        <Template>
          <HomeScanQR />
        </Template>

        {/* <Template>
          <HomePartners />
        </Template>

        <Template>
          <HomeMedia />
        </Template> */}

        <Template>
          <HomeWhyAGSpert />
        </Template>

        {/* <Template>
          <HomeClients />
        </Template> */}

        <Template>
          <HomePartners />
        </Template>

        <Template>
          <HomeMedia />
        </Template>

        <Template>
          <HomeSupportedBy />
        </Template>

        {/* <Template>
          <HomeAbout />
        </Template> */}

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
