import * as React from "react";
import Image from "next/image";

import { TypographyH1, TypographyH2, TypographyH4, TypographyP } from "@/components/typography";
import Template from "@/layouts/template";
import { Separator } from "@/components/ui/separator";

function Section({ children }: { children: React.ReactNode }) {
  return <section className="flex flex-col items-center gap-6 w-full mt-10">{children}</section>;
}

export default function ValueChainView() {
  return (
    <>
      <Template>
        <section className="container w-full flex flex-col items-center overflow-hidden mt-40 z-0">
          <div className="w-full min-h-96 relative z-0">
            <TypographyH1 className="text-primary text-center z-30 block">Agspeak - Value Chain</TypographyH1>
            <Image src={'/images/industry-leadership.jpg'} alt="" layout="fill" className="-z-10" />
            {/* <img loading="lazy" src="/images/industry-leadership.jpg" alt="" className="min-h-96" /> */}
          </div>

          <Section>
            <TypographyH2 className="text-primary">Agri Value Chain:</TypographyH2>

            <TypographyH4>Blockchain Traceability for Agriculture - </TypographyH4>

            <TypographyP className="!mt-0">
              Our digital platform ensures food safety, sustainability, and regulatory compliance
              for the food and agri supply chain, facilitating seamless export to global markets.
            </TypographyP>

            <TypographyH4>AGRI TRACEABILITY MADE EASY - </TypographyH4>
            <ul className="list-disc pl-12">
              <li>
                <strong>Lack of trust in the supply chain claims:&nbsp;</strong>
                <span>
                  There are many participants involved in the food supply chain and it can be
                  difficult for consumers to trust that all of the claims being made about the food
                  are accurate.
                </span>
              </li>

              <li>
                <strong>No ability to track and trace:&nbsp;</strong>
                <span>
                  It is difficult to track food products from farm to fork, which makes it difficult
                  to identify the source of contamination if there is a food safety problem.
                </span>
              </li>

              <li>
                <strong>Lack of compliance in quality and food safety:&nbsp;</strong>
                <span>
                  There is a lack of processes and technology in place to ensure that food safety
                  standards are being met throughout the supply chain.
                </span>
              </li>

              <li>
                <strong>Consumers paranoid about the quality of food they are eating:&nbsp;</strong>
                <span>
                  Consumers are increasingly concerned about the quality of the food they are eating
                  and want to know more about where their food comes from and how it is produced.
                </span>
              </li>
            </ul>

            <TypographyH2>HOW DO THE AGSPEAK BLOCKCHAIN-POWERED SOLUTIONS HELP?</TypographyH2>

            <TypographyP>
              Agspeak offers a tracking system specifically designed for the agriculture industry.
              It uses blockchain technology, which is like a super secure record book, to track food
              every step of the way, from when it&apos;s just a tiny sprout to when it lands on your
              plate. This system helps everyone involved in getting food to know exactly what&apos;s
              going on and ensures that the food is safe, produced sustainably, and meets all the
              regulations. Agspeak basically empowers everyone in the food chain and creates a
              win-win situation for both farmers and consumers by guaranteeing the quality and
              safety of the food.
            </TypographyP>
            {/* image */}

            <TypographyH2>
              WHY IS AGSPEAK BLOCKCHAIN-POWERED TRACEABILITY THE MOST PREFERRED SOLUTION?
            </TypographyH2>

            <ul className="list-disc pl-12">
              <li>
                <strong>Configurable:&nbsp;</strong>
                <span>
                  Agspeak works easily with your existing farm management systems, no need to rip
                  and replace everything.
                </span>
              </li>

              <li>
                <strong>Decentralised:&nbsp;</strong>
                <span>
                  Imagine a bunch of computers keeping copies of the same information, like a super
                  secure backup system. This makes it almost impossible to hack or mess with the
                  data.
                </span>
              </li>

              <li>
                <strong>Immutable:&nbsp;</strong>
                <span>
                  Once information is entered into Agspeak, it can&apos;t be changed. This ensures
                  everything is accurate and can&apos;t be tampered with.
                </span>
              </li>

              <li>
                <strong>Distributed:&nbsp;</strong>
                <span>
                  Everyone involved in the food chain can see the information in real-time, creating
                  trust and transparency.
                </span>
              </li>
            </ul>

            <TypographyH4>KEY BENEFITS of Agspeak : </TypographyH4>

            <ul className="list-disc pl-12">
              <li>
                <strong>Track and Trace system:&nbsp;</strong>
                <span>
                  This system creates unique digital identities for every batch of food, which
                  allows for tracing the food back to its source and reducing product recalls. This
                  also provides end-to-end visibility throughout the supply chain, ensuring
                  transparency.
                </span>
              </li>

              <li>
                <strong>Builds Brand Value:&nbsp;</strong>
                <span>
                  Agspeak allows for visibility and transparency throughout the entire supply chain
                  of agri-food products. This builds trust in the brand and creates a more credible
                  product.
                </span>
              </li>

              <li>
                <strong>Compliance:&nbsp;</strong>
                <span>
                  Agspeak validates products for quality and authenticity and ensures compliance
                  with regulatory standards.
                </span>
              </li>

              <li>
                <strong>Farmer Empowerment:&nbsp;</strong>
                <span>
                  The Farm Management software offered by Agspeak increases operational efficiency,
                  crop yields, and profitability for farmers.
                </span>
              </li>
            </ul>
          </Section>

          <Separator className="mt-10" />

          <Section>
            <TypographyH2 className="text-primary">Dairy Value Chain:</TypographyH2>
            <TypographyH4>Blockchain Traceability for the Dairy Value Chain - </TypographyH4>
            <TypographyP>
              Introducing our traceability solution designed to ensure milk purity with zero
              adulteration. Our platform enables tracking and tracing of milk from its source,
              guaranteeing transparency and authenticity throughout the supply chain.
            </TypographyP>
            <ul className="list-disc pl-12">
              <li>
                <strong>Difficulty in tracking the source of impurity:&nbsp;</strong>
                <span>
                  Production, processing, and sale of milk involve various parties. Tracking
                  contamination sources and minimizing recalls becomes difficult due to this
                  complexity.
                </span>
              </li>

              <li>
                <strong>Management Challenges for Small Dairy Farmers:&nbsp;</strong>
                <span>
                  Small dairy farmers require significant resources for effective management.
                  Implementing food safety regulations and quality controls among small dairy
                  farmers is prone to errors due to a lack of validation mechanisms.
                </span>
              </li>

              <li>
                <strong>Lack of Digital Solutions:&nbsp;</strong>
                <span>
                  There is no comprehensive solution to digitize the entire milk supply chain.
                  Absence of innovative solutions exposes the supply chain to risks, lacking a
                  single reliable source for validating data across its complexity.
                </span>
              </li>
            </ul>

            <TypographyH4>HOW DO AGSPEAK BLOCKCHAIN-POWERED SOLUTIONS HELP?</TypographyH4>

            <TypographyP>
              Agspeak has developed a tailored solution for the dairy supply chain, leveraging
              blockchain technology. This innovative platform allows for seamless tracking and
              tracing of the entire process, from verifying milk sources to maintaining quality at
              collection centres, bulk milk chillers, packaging, and distribution. By enhancing
              traceability, Agspeak effectively tackles food safety concerns and ensures adherence
              to regulatory standards.
            </TypographyP>

            {/* image */}

            <TypographyH2>
              WHY IS AGSPEAK BLOCKCHAIN-POWERED TRACEABILITY THE MOST PREFERRED SOLUTION?
            </TypographyH2>

            <ul className="list-disc pl-12">
              <li>
                <strong>Configurable:&nbsp;</strong>
                <span>
                  Agspeak works easily with your existing farm management systems, no need to rip
                  and replace everything.
                </span>
              </li>

              <li>
                <strong>Decentralised:&nbsp;</strong>
                <span>
                  Imagine a bunch of computers keeping copies of the same information, like a super
                  secure backup system. This makes it almost impossible to hack or mess with the
                  data.
                </span>
              </li>

              <li>
                <strong>Immutable:&nbsp;</strong>
                <span>
                  Once information is entered into Agspeak, it can&apos;t be changed. This ensures
                  everything is accurate and can&apos;t be tampered with.
                </span>
              </li>

              <li>
                <strong>Distributed:&nbsp;</strong>
                <span>
                  Everyone involved in the food chain can see the information in real-time, creating
                  trust and transparency.
                </span>
              </li>
            </ul>

            <TypographyH4>KEY BENEFITS of Agspeak : </TypographyH4>

            <ul className="pl-12">
              <li>
                <strong>Track and Trace Adulteration Sources:&nbsp;</strong>

                <ul className="list-disc pl-12">
                  <li>
                    Every batch of milk is assigned a unique digital identity, allowing easy tracing
                    back to any source of adulteration.
                  </li>
                  <li>
                    Accurate identification of adulteration sources reduces product recalls and
                    minimizes milk wastage.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Builds Brand Value:&nbsp;</strong>
                <ul className="list-disc pl-12">
                  <li>
                    Offers visibility into the entire supply chain journey of milk products,
                    instilling confidence and trust in buyers.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Compliance:&nbsp;</strong>
                <ul className="list-disc pl-12">
                  <li>
                    Provides end-to-end visibility of the supply chain through a single, reliable
                    source of truth.
                  </li>
                  <li>
                    Ensures compliance with regulatory standards, with tangible evidence of product
                    claims.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Digitize end-to-end Supply Chain Process:&nbsp;</strong>
                <ul className="list-disc pl-12">
                  <li>
                    Establishes a transparent system, creating a digital footprint for milk
                    products.
                  </li>
                  <li>
                    Utilizes a decentralized platform to connect farmers and consumers, enhancing
                    transparency and accountability.
                  </li>
                </ul>
              </li>
            </ul>
          </Section>

          <Separator className="mt-10" />

          <Section>
            <TypographyH2 className="text-primary">Livestock Value Chain:</TypographyH2>
            <TypographyH4>Blockchain Traceability for the Livestock Value Chain - </TypographyH4>

            <TypographyP className="!m-0">
              Livestock traceability is a powerful tool for ensuring food safety, reducing recalls,
              and promoting a more transparent and sustainable meat industry.
            </TypographyP>

            <TypographyH4>LIVESTOCK TRACEABILITY WITH AGSPEAK</TypographyH4>

            <div className="flex flex-col pl-12">
              <TypographyP className="!m-0">
                <strong>
                  Unable to track the quality of product because of the unorganised setup -{" "}
                </strong>
                <br />
                Livestock traceability is a powerful tool for ensuring food safety, reducing
                recalls, and promoting a more transparent and sustainable meat industry.
              </TypographyP>

              <TypographyP className="!m-0">
                <strong>Lack of consumer trust in the meat - </strong>
                <br />
                Consumers lack trust in meat quality. Quality-conscious consumers seek to know the
                source of meat before consumption.
              </TypographyP>

              <TypographyP className="!m-0">
                <strong>Lack of solution to digitize the entire supply chain - </strong>
                <br />
                The current methods for managing the supply chain are either unverifiable or
                susceptible to tampering. There isn&apos;t a single authoritative source available
                to effectively manage and control the entire supply chain.
              </TypographyP>

              <TypographyH4 className="mt-8">
                HOW DO AGSPEAK BLOCKCHAIN-POWERED SOLUTIONS HELP?
              </TypographyH4>
              <TypographyP className="!m-0">
                Agspeak offers a revolutionary blockchain-based platform for tracking livestock from
                farm to fork. This system verifies everything, from the animal&apos;s origin and
                diet to its antibiotic and heavy metal exposure. You can even track the processing
                and distribution stages. This ensures food safety, regulatory compliance, and gives
                you complete transparency throughout the supply chain.
              </TypographyP>
            </div>

            <TypographyH2>
              WHY IS AGSPEAK BLOCKCHAIN-POWERED TRACEABILITY THE MOST PREFERRED SOLUTION?
            </TypographyH2>

            <ul className="list-disc pl-12">
              <li>
                <strong>Configurable:&nbsp;</strong>
                <span>
                  Plug and Play: Integrates seamlessly with your current digital systems and can be
                  tailored to your specific supply chain.
                </span>
              </li>

              <li>
                <strong>Decentralised:&nbsp;</strong>
                <span>
                  Unbreakable Network: Data is securely stored across multiple locations, making it
                  resistant to outages and attacks.
                </span>
              </li>

              <li>
                <strong>Immutable:&nbsp;</strong>
                <span>
                  Unalterable Records: Blockchain technology uses advanced encryption to ensure
                  information cannot be changed, guaranteeing tamper-proof data.
                </span>
              </li>

              <li>
                <strong>Distributed:&nbsp;</strong>
                <span>
                  Real-Time Transparency: Provides clear visibility into all supply chain
                  transactions, fostering trust among participants.
                </span>
              </li>
            </ul>

            <TypographyH4>KEY BENEFITS of Agspeak : </TypographyH4>

            <ul className="list-disc pl-12">
              <li>
                <strong>Real-Time Quality Tracking:&nbsp;</strong>
                <span>
                  Traceability allows for monitoring meat quality throughout the supply chain,
                  minimising product recalls and ensuring food safety.
                </span>
              </li>

              <li>
                <strong>Enhanced Brand Reputation:&nbsp;</strong>
                <span>
                  Complete transparency across the livestock supply chain builds trust with
                  consumers and strengthens brands that prioritise safe food.
                </span>
              </li>

              <li>
                <strong>Simplified Compliance:&nbsp;</strong>
                <span>
                  Traceability facilitates audit trails, guaranteeing product authenticity and
                  credibility in both domestic and export markets.
                </span>
              </li>

              <li>
                <strong>Digital Supply Chain Footprint:&nbsp;</strong>
                <span>
                  End-to-end transparency establishes a digital record of the product&apos;s
                  journey, opening up new opportunities for farmers, such as premium markets or
                  access to financing.
                </span>
              </li>
            </ul>
          </Section>

          <Separator className="mt-10" />

          <Section>
            <TypographyH2 className="text-primary">Poultry Value Chain:</TypographyH2>

            <TypographyH4>Blockchain Traceability for Poultry and Meat Value Chain - </TypographyH4>
            <TypographyP className="!m-0">
              A system for tracing poultry from farm to table ensures food safety for consumers.
              This poultry traceability solution monitors the entire value chain of poultry.
            </TypographyP>

            <TypographyH2>EASIEST WAY TO POULTRY TRACEABILITY</TypographyH2>

            <ul className="list-disc pl-12">
              <li>
                <strong>Risks of foodborne diseases </strong>
                <br />
                Contamination of poultry products with infectious agents, antimicrobial drugs, and
                pesticides on the farm increases the risks of foodborne diseases.
              </li>

              <li>
                <strong>Rising awareness in the consumer</strong>
                <br />
                Consumer awareness about food safety, environmental impact, and the origin of food
                is on the rise.
              </li>

              <li>
                <strong>Flock health</strong>
                <br />
                Flock health and the involvement of multiple players in the supply chain are crucial
                factors.
              </li>

              <li>
                <strong>Regulatory compliance</strong>
                <br />
                Adherence to regulations and standards is essential for both domestic and export
                markets.
              </li>
            </ul>

            <TypographyH2>HOW DO AGSPEAK BLOCKCHAIN-POWERED SOLUTIONS HELP?</TypographyH2>
            <TypographyP className="!m-0">
              Agspeak has revolutionized the poultry supply chain with a tailor-made solution.
              Utilizing blockchain technology, our digital agricultural solution meticulously
              records every step of the journey from production through processing, storage,
              distribution, and finally to the end consumer. This comprehensive approach empowers
              all stakeholders in the supply chain, fostering a harmonious balance between producers
              and consumers. By prioritizing traceability, our solution effectively tackles food
              safety concerns and ensures compliance with regulatory standards.
            </TypographyP>

            {/* image */}

            <TypographyH2>
              WHY IS AGSPEAK BLOCKCHAIN-POWERED TRACEABILITY THE MOST PREFERRED SOLUTION?
            </TypographyH2>
            <ul className="list-disc pl-12">
              <li>
                <strong>Configurable:&nbsp;</strong>
                <span>
                  Plug and Play: Integrates seamlessly with your current digital systems and can be
                  tailored to your specific supply chain.
                </span>
              </li>

              <li>
                <strong>Decentralised:&nbsp;</strong>
                <span>
                  Unbreakable Network: Data is securely stored across multiple locations, making it
                  resistant to outages and attacks.
                </span>
              </li>

              <li>
                <strong>Immutable:&nbsp;</strong>
                <span>
                  Unalterable Records: Blockchain technology uses advanced encryption to ensure
                  information cannot be changed, guaranteeing tamper-proof data.
                </span>
              </li>

              <li>
                <strong>Distributed:&nbsp;</strong>
                <span>
                  Real-Time Transparency: Provides clear visibility into all supply chain
                  transactions, fostering trust among participants.
                </span>
              </li>
            </ul>

            <TypographyH4>Key Benefits</TypographyH4>

            <ul className="list-disc pl-12">
              <li>
                <strong>Real-Time Quality Tracking:&nbsp;</strong>
                <span>
                  Traceability allows for monitoring meat quality throughout the supply chain,
                  minimising product recalls and ensuring food safety.
                </span>
              </li>

              <li>
                <strong>Enhanced Brand Reputation:&nbsp;</strong>
                <span>
                  Complete transparency across the livestock supply chain builds trust with
                  consumers and strengthens brands that prioritise safe food.
                </span>
              </li>

              <li>
                <strong>Simplified Compliance:&nbsp;</strong>
                <span>
                  Traceability facilitates audit trails, guaranteeing product authenticity and
                  credibility in both domestic and export markets.
                </span>
              </li>

              <li>
                <strong>Digital Supply Chain Footprint:&nbsp;</strong>
                <span>
                  End-to-end transparency establishes a digital record of the product&apos;s
                  journey, opening up new opportunities for farmers, such as premium markets or
                  access to financing.
                </span>
              </li>
            </ul>
          </Section>

          <Separator className="mt-10" />

          <Section>
            <TypographyH2 className="text-primary">Seafood Value Chain:</TypographyH2>

            <TypographyH4>Blockchain Traceability for Seafood Value Chain - </TypographyH4>
            <TypographyP className="!m-0">
              A seafood traceability system designed to monitor and follow the dispersed seafood
              market, ensuring comprehensive visibility across the entire supply chain from start to
              finish.
            </TypographyP>

            <TypographyH2>SEAFOOD TRACEABILITY ACROSS THE VALUE CHAIN</TypographyH2>

            <ul className="list-disc pl-12">
              <li>
                <strong>Need for sustainable fishing practices</strong>
                <br />
                Over 89% of global fish stocks are either overfished or fully exploited. The
                illegal, unregulated, and unreported fishing sector is responsible for capturing
                over 700 kilograms of seafood every second.
              </li>

              <li>
                <strong>Increased consumer awareness with respect to the quality of seafood</strong>
                <br />
                Following the COVID-19 pandemic, there has been a notable increase in seafood
                consumption. Alarmingly, approximately 20% of the seafood purchased by consumers is
                mislabeled.
              </li>

              <li>
                <strong>Lack of solutions to control the pilferage of seafood</strong>
                <br />
                Over 60% of seafood is lost within the supply chain.
              </li>
            </ul>

            <TypographyH2>HOW DO AGSPEAK BLOCKCHAIN-POWERED SOLUTIONS HELP?</TypographyH2>
            <TypographyP className="!m-0">
              Agspeak has developed an innovative solution tailored for the seafood supply chain.
              Our blockchain-driven platform enables comprehensive tracking and tracing throughout
              the entire process, starting from authenticating the fish source, guaranteeing quality
              at landing and processing hubs, all the way to packaging and distribution.
            </TypographyP>

            {/* image */}

            <TypographyH2>
              WHY IS AGSPEAK BLOCKCHAIN-POWERED TRACEABILITY THE MOST PREFERRED SOLUTION?
            </TypographyH2>
            <ul className="list-disc pl-12">
              <li>
                <strong>Configurable:&nbsp;</strong>
                <ul className="list-disc pl-12">
                  <li>
                    Our solution seamlessly integrates with existing digital infrastructures and can
                    be customized to meet the unique needs of your supply chain.
                  </li>
                  <li>
                    food traceability, food supply chain, blockchain traceability, agriculture
                    traceability software
                  </li>
                </ul>
              </li>

              <li>
                <strong>Decentralised:&nbsp;</strong>
                <ul className="list-disc pl-12">
                  <li>
                    By distributing data across multiple nodes, our system ensures fault tolerance
                    and resilience against malicious attacks.
                  </li>
                  <li>
                    food traceability, food supply chain, traceability practices, blockchain
                    traceability
                  </li>
                </ul>
              </li>

              <li>
                <strong>Immutability:&nbsp;</strong>
                <ul className="list-disc pl-12">
                  <li>
                    Utilizing cryptographic hashes and encryption, data written into the blockchain
                    remains unalterable, guaranteeing tamper-proof records.
                  </li>
                  <li>
                    food traceability, food supply chain, traceability practices, blockchain
                    traceability
                  </li>
                </ul>
              </li>

              <li>
                <strong>Distributed:&nbsp;</strong>
                <span>
                  Enhancing trust among participants, our platform offers real-time visibility into
                  transactions across the supply chain, fostering transparency and accountability.
                </span>
              </li>
            </ul>

            <TypographyH4>Key Benefits</TypographyH4>

            <ul className="list-disc pl-12">
              <li>
                <strong>Track and Trace Fish Sources:&nbsp;</strong>
                <span>
                  Generate unique digital identities for each batch of seafood, facilitating
                  traceability back to the source. This aids authorities in verifying sustainability
                  and authenticity.
                </span>
              </li>

              <li>
                <strong>Builds Brand Value:&nbsp;</strong>
                <span>
                  Offer visibility into the entire supply chain journey of seafood products,
                  instilling confidence and trust in buyers.
                </span>
              </li>

              <li>
                <strong>Compliance:&nbsp;</strong>
                <span>
                  Utilize the digital ledger to record all transactions among stakeholders, ensuring
                  an auditable record and compliance with standards.
                </span>
              </li>

              <li>
                <strong>Digitize End-to-End Supply Chain Process:&nbsp;</strong>
                <span>
                  Blockchain technology tracks the journey of seafood from ocean to plate, enhancing
                  transparency and streamlining processes.
                </span>
              </li>
            </ul>
          </Section>

          <Separator className="mt-10" />

          <Section>
            <TypographyH2 className="text-primary">Seed Value Chain:</TypographyH2>

            <TypographyH4>Blockchain Traceability for Seed Value Chain - </TypographyH4>
            <TypographyP className="!m-0">
              A Seed traceability solution to validate seed purity and eliminate risks of fake seeds
            </TypographyP>

            <TypographyH2>SEED TRACEABILITY DONE IN AN EFFICIENT WAY - </TypographyH2>

            <ul className="list-disc pl-12">
              <li>
                <strong>Inability to verify purity and quality of seed</strong>
                <br />
                The quality of seed is pivotal in maximizing harvest yield. Unfortunately, claims
                made by seed suppliers often cannot be substantiated.
              </li>

              <li>
                <strong>Widespread sale of Fake and Spurious seeds</strong>
                <br />
                The proliferation of counterfeit and substandard seeds not only affects yield but
                also results in substantial crop loss and distress among farmers.
              </li>

              <li>
                <strong>Lack of solutions to digitize the entire supply chain</strong>
                <br />
                Current methodologies fail to offer a definitive single source of truth for managing
                and overseeing the entirety of the supply chain.
              </li>
            </ul>

            <TypographyH2>HOW DO AGSPEAK BLOCKCHAIN-POWERED SOLUTIONS HELP?</TypographyH2>
            <TypographyP className="!m-0">
              Agspeak has revolutionized the seed supply chain with a tailored solution. Our
              blockchain-powered platform enables comprehensive tracking and tracing throughout the
              entire process, starting from the distribution of foundation seed to the production
              and sale of certified seed.
            </TypographyP>

            {/* image */}

            <TypographyH2>
              WHY IS AGSPEAK BLOCKCHAIN-POWERED TRACEABILITY THE MOST PREFERRED SOLUTION?
            </TypographyH2>
            <ul className="list-disc pl-12">
              <li>
                <strong>Configurable:&nbsp;</strong>
                <ul className="list-disc pl-12">
                  <li>
                    Our solution seamlessly integrates with existing digital infrastructures and can
                    be customized to meet the unique needs of your supply chain.
                  </li>
                  <li>
                    food traceability, food supply chain, blockchain traceability, agriculture
                    traceability software
                  </li>
                </ul>
              </li>

              <li>
                <strong>Decentralised:&nbsp;</strong>
                <ul className="list-disc pl-12">
                  <li>
                    By distributing data across multiple nodes, our system ensures fault tolerance
                    and resilience against malicious attacks.
                  </li>
                  <li>
                    food traceability, food supply chain, traceability practices, blockchain
                    traceability
                  </li>
                </ul>
              </li>

              <li>
                <strong>Immutability:&nbsp;</strong>
                <ul className="list-disc pl-12">
                  <li>
                    Utilizing cryptographic hashes and encryption, data written into the blockchain
                    remains unalterable, guaranteeing tamper-proof records.
                  </li>
                  <li>
                    food traceability, food supply chain, traceability practices, blockchain
                    traceability
                  </li>
                </ul>
              </li>

              <li>
                <strong>Distributed:&nbsp;</strong>
                <span>
                  Enhancing trust among participants, our platform offers real-time visibility into
                  transactions across the supply chain, fostering transparency and accountability.
                </span>
              </li>
            </ul>

            <TypographyH4>Key Benefits</TypographyH4>

            <ul className="list-disc pl-12">
              <li>
                <strong>Track and Trace:&nbsp;</strong>
                <span>
                  Monitor the entire supply chain in real-time to verify seed purity, effectively
                  combating fraud and contamination.
                </span>
              </li>

              <li>
                <strong>Builds Brand Value:&nbsp;</strong>
                <span>
                  Offer visibility into the complete journey of certified seed through the supply
                  chain, enhancing buyer confidence and trust.
                </span>
              </li>

              <li>
                <strong>Compliance:&nbsp;</strong>
                <span>
                  Simplify compliance by relying on a single, centralized certification source. This
                  single source of truth validates seed quality, ensuring adherence to standards.
                </span>
              </li>

              <li>
                <strong>Digitize End-to-End Supply Chain Process:&nbsp;</strong>
                <span>
                  Capture the entire seed cycle with recorded transactions, streamlining processes
                  for a sustainable and efficient supply chain.
                </span>
              </li>
            </ul>
          </Section>

          <Separator className="mt-10" />
        </section>
      </Template>
    </>
  );
}
