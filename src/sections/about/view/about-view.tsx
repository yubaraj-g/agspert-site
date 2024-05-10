"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Template from "@/layouts/template";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLead,
  TypographyP,
  TypographySmall,
} from "@/components/typography";

export default function AboutView() {
  return (
    <Template>
      <section className="min-h-dvh flex flex-col items-center w-full gap-8">
        <Template>
          <div className="h-32 lg:h-64 flex items-center text-primary">
            <TypographyH1>About Us</TypographyH1>
          </div>
        </Template>
        <Template>
          <TypographyP>
            Welcome to AgSpert, where innovation meets tradition in the world of agriculture.
            Founded by a passionate mechanical engineer with expertise in materials science and
            nanotechnology, AgSpert brings together cutting-edge technology and deep-rooted
            agricultural knowledge.
            <br />
            <br />
            Our journey began with a unique blend of experiences. Growing up in a family deeply
            connected to farming, our founder developed a profound understanding of the challenges
            faced by farmers from an early age. This insight was further honed during their academic
            pursuit, culminating in a master&apos;s degree focused on materials science and
            nanotechnology.
            <br />
            <br />
            The turning point came when they had the opportunity to work closely with farmers in the
            northeastern region of India as part of projects with The Indian Council of Agricultural
            Research in New Delhi. Engaging with over a hundred farmers every week, they delved deep
            into the core issues plaguing Indian agriculture.
            <br />
            <br />
            Harnessing the power of data analytics and project management, our founder, along with
            support from college Alumni Dhritiman, transformed this wealth of experience into
            AgSpert. Our mission is to revolutionise the agricultural landscape by bridging the gap
            between traditional farming practices and modern technological solutions.
            <br />
            <br />
            At AgSpert, we believe in empowering farmers with actionable insights, leveraging
            advanced technologies such as nanotechnology to enhance crop yields, optimise resource
            utilisation, and promote sustainable farming practices. We are dedicated to creating a
            brighter future for farmers and ensuring food security for generations to come.
            <br />
            <br />
            Join us on this transformative journey as we redefine the boundaries of agriculture and
            pave the way for a more prosperous and sustainable farming community.
            <br />
            <br />
          </TypographyP>
        </Template>

        <Template>
          <TypographyH1 className="text-primary">FROM THE DESK OF THE CEO</TypographyH1>
        </Template>
        <div className="w-full mt-8">
          <Template>
            <div className="flex flex-col-reverse lg:flex-row gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center gap-6"
              >
                <TypographyH2>SIDDHARTHA BORAH</TypographyH2>

                <TypographyH4 className="text-muted-foreground font-extrabold">
                  DESIGNATION - CEO (Business/Product Dev)
                </TypographyH4>

                <TypographyLead>
                  EXP - (7 yrs) - Ex-ICAR (Precision Engg./Material Sc.)
                </TypographyLead>
              </motion.div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative aspect-square w-56 lg:w-96 rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/siddhartha-bora.jpg"
                    alt="CEO"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </Template>
        </div>

        <div className="w-full mt-8">
          <Template>
            <div className="flex flex-col-reverse lg:flex-row gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center gap-6"
              >
                <TypographyH2>AKASH SHARMA</TypographyH2>

                <TypographyH4 className="text-muted-foreground font-extrabold">
                  DESIGNATION - CTO (Technology Dev)
                </TypographyH4>

                <TypographyLead>EXP - (5 yrs) - Ex-SocGen (SD exec/ TL)</TypographyLead>
              </motion.div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative aspect-square w-56 lg:w-96 rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/AKASH SHARMA.jpg" alt="CEO" layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </Template>
        </div>

        <div className="w-full mt-8">
          <Template>
            <div className="flex flex-col-reverse lg:flex-row gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center gap-6"
              >
                <TypographyH2>ROSHAN DHAKAL</TypographyH2>

                <TypographyH4 className="text-muted-foreground font-extrabold">
                  DESIGNATION - COO (Marketing/Sales)
                </TypographyH4>

                <TypographyLead>EXP - (7 yrs) Ex-ITC || Ex-The Whole Truth Foods</TypographyLead>

                <TypographyLead className="!text-sm">
                  Hi, I am Roshan Dhakal, chief of operations here at Agspert. Coming from an FMCG
                  background I have had amazing opportunities in “ITC Ltd” to understand products
                  and distribution in depth. It has always fascinated me as to how a company of that
                  scale can operate with such efficiency to create value and hence remain relevant
                  for over a century. With that knowledge, I decided to move on to a Startup “The
                  Whole Truth Foods” where I learned in detail about the food industry and the
                  problem of transparency which consumers have no idea about. The very fact that
                  most companies are not transparent enough is highly concerning for me. I found
                  that the reason is that companies do not want to be transparent enough or simply
                  don&apos;t have the tools or capability to be transparent. While I could do very little
                  about the former I had a keen interest to be part of the solution for the later
                  and that is when I came across Agspert. Agspert is not just a product but an idea
                  of revolutionising the food industry and how consumers consume packet food
                  products and that idea fascinates me to the core.
                </TypographyLead>
              </motion.div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative aspect-square w-56 lg:w-96 rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/ROSHAN DHAKAL.jpg"
                    alt="CEO"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </Template>
        </div>

        <div className="w-full mt-8">
          <Template>
            <div className="flex flex-col-reverse lg:flex-row gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center gap-6"
              >
                <TypographyH2>DHRITIMAN TALUKDAR</TypographyH2>

                <TypographyH4 className="text-muted-foreground font-extrabold">
                  DESIGNATION - DATA SCIENTIST
                </TypographyH4>

                <TypographyLead>EXP - (5 yrs) Ex-ITC || Ex-The Whole Truth Foods</TypographyLead>

                <TypographyLead className="!text-sm">
                  Hello, I am Dhritiman Talukdar, the co-founder of AgSpert Technologies Pvt. Ltd. I
                  have always been passionate about leveraging technology to solve real-world
                  problems. With a background in Computational Material Science, I bring a unique
                  perspective to our company.
                  <br />
                  My life&apos;s work is dedicated to making a positive impact on the world through
                  innovation and technology. I believe in the power of perseverance, the importance
                  of integrity, and the value of teamwork.
                  <br />
                  As for my vision for AgSpert Technologies, I see us as a leading force in the
                  traceability sector of the food industry. Our mission is to empower farmers,
                  enterprises and consumers with data-driven insights and cutting-edge tools that
                  enhance transparency and accountability in the food supply chain. We aim to create
                  a future where every stakeholder in the food industry, from farmers to consumers,
                  has access to reliable and real-time information about their food&apos;s journey. This
                  will not only increase efficiency and profitability but also foster trust and
                  ensure food safety and quality. We are committed to making this vision a reality,
                  contributing to a more sustainable and secure global food system.
                  <br />I am excited about the journey ahead and I am confident that with our
                  talented team and our shared commitment to our vision, we will continue to
                  innovate and make a significant impact in the agri-tech sector.
                </TypographyLead>
              </motion.div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative aspect-square w-56 lg:w-96 rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/DHRITIMAN TALUKDAR.jpg"
                    alt="CEO"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </Template>
        </div>
      </section>
    </Template>
  );
}
