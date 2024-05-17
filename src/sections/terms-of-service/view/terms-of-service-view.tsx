import * as React from "react";
import Link from "next/link";

import { TypographyH1, TypographyH4, TypographyP } from "@/components/typography";
import Template from "@/layouts/template";

import { _termsData } from "@/assets/data/terms-data";

export default function TermsOfServiceView() {
  return (
    <React.Fragment>
      <Template>
        <section className="mt-28 container pt-8 flex flex-col gap-8">
          <TypographyH1>Terms of Service</TypographyH1>

          <TypographyP>
            This terms of use document (together with the documents referred to in it) tells you the
            terms of use on which you may make use of our website&nbsp;
            <Link
              className="text-primary hover:text-foreground hover:underline"
              href="https://www.agspert.com"
            >
              www.agspert.com
            </Link>
            &nbsp;or&nbsp;
            <Link
              className="text-primary hover:text-foreground hover:underline"
              href="https://www.site.agspert.com"
            >
              www.site.agspert.com
            </Link>{" "}
            and the interactive features of our web application, mobile app “AgSpeak” and services
            (“collective referred as our site”), whether as a guest or a registered user. Use of our
            site includes accessing, browsing, or registering to use our site.
          </TypographyP>

          <TypographyP>
            Please read these terms of use carefully before you start to use our site, as these will
            apply to your use of our site. By using our site, you confirm that you accept these
            terms of use and that you agree to comply with them. If you do not agree to these terms
            of use, you must not use our site.
          </TypographyP>

          <TypographyH4>OTHER APPLICABLE TERMS</TypographyH4>

          <div>
            <TypographyP className="!mt-0">
              These terms of use refer to the following additional terms, which also apply to your
              use of our service:
            </TypographyP>
            <ul className="list-disc ml-6">
              <li>
                <TypographyP className="!mt-0">
                  Our Privacy policy, which sets out the terms on which we process any personal data
                  we collect from you, or that you provide to us. By using our site, you consent to
                  such processing and you warrant that all data provided by you is accurate.
                </TypographyP>
              </li>
              <li>
                <TypographyP className="!mt-0">
                  Our acceptable use policy, which sets out the permitted uses and prohibited uses
                  of our site. When using our site, you must comply with this Acceptable Use Policy.
                </TypographyP>
              </li>
              <li>Our cookie policy, which sets out information about the cookies on our site.</li>
            </ul>
          </div>

          {_termsData.map((item) => (
            <React.Fragment key={item.title}>
              <TypographyH4>{item.title}</TypographyH4>

              <TypographyP className="!mt-0">{item.desc}</TypographyP>
            </React.Fragment>
          ))}

          <TypographyH4>LIMITATION OF OUR LIABILITY</TypographyH4>

          <TypographyP className="!mt-0">
            Nothing in these terms of use excludes or limits our liability for death or personal
            injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any
            other liability that cannot be excluded or limited by English law.
            <br />
            <br />
            To the extent permitted by law, we exclude all conditions, warranties, representations
            or other terms which may apply to our site or any content on it, whether express or
            implied.
            <br />
            <br />
            We will not be liable to any user for any loss or damage, whether in contract, tort
            (including negligence), breach of statutory duty, or otherwise, even if foreseeable,
            arising under or in connection with use of, or inability to use, our site or use of or
            reliance on any content displayed on our site.
            <br />
            <br />
            We will not be liable for loss of profits, sales, business, or revenue, business
            interruption, loss of anticipated savings, loss of business opportunity, goodwill or
            reputation, or any indirect or consequential loss or damage.
            <br />
            <br />
            We will not be liable for any loss or damage caused by a virus, distributed
            denial-of-service attack, or other technologically harmful material that may infect your
            computer equipment, computer programs, data or other proprietary material due to your
            use of our site or to your downloading of any content on it, or on any website linked to
            it.
            <br />
            <br />
            We assume no responsibility for the content of websites linked on our site. Such links
            should not be interpreted as endorsement by us of those linked websites. We will not be
            liable for any loss or damage that may arise from your use of them.
          </TypographyP>

          <TypographyH4>UPLOADING CONTENT TO OUR SITE</TypographyH4>

          <TypographyP className="!mt-0">
            Whenever you upload content to our site, or make contact with other users of our site,
            you must comply with the content standards set out in our Acceptable Use Policy.
            <br />
            <br />
            You warrant that any such contribution does comply with those standards, and you will be
            liable to us and indemnify us for any breach of that warranty.
            <br />
            <br />
            Any content you upload to our site will be considered non-confidential and
            non-proprietary. You retain all of your ownership rights in your content, but you are
            required to grant us and other users of our site a limited license to use, store and
            copy that content and to distribute and make it available to third parties. The rights
            you license to us are described in the next section.
            <br />
            <br />
            We also have the right to disclose your identity to any third party who is claiming that
            any content posted or uploaded by you to our site constitutes a violation of their
            intellectual property rights, or of their right to privacy.
            <br />
            <br />
            We will not be responsible, or liable to any third party, for the content or accuracy of
            any content posted by you or any other user of our site. The views expressed by other
            users on our site do not represent our views or values.
          </TypographyP>

          <TypographyH4>RIGHTS YOU LICENCE</TypographyH4>

          <div>
            <TypographyP className="!mt-0">
              When you upload or post content to our site, you grant the following licenses:
            </TypographyP>
            <ul className="list-disc ml-6">
              <li>
                <TypographyP className="!mt-0">
                  To us: a perpetual, worldwide, non-exclusive, royalty-free, transferable license
                  to use, reproduce, distribute, prepare derivative works of, or display that user
                  generated content in connection with our services and the promotion of our
                  services and across different media
                </TypographyP>
              </li>
              <li>
                <TypographyP className="!mt-0">
                  To other users of our site or to third parties: a perpetual, worldwide,
                  non-exclusive, royalty-free, transferable license to use, reproduce, distribute,
                  prepare derivative works of, or display that user generated content for their
                  purposes or in accordance with the functionality of our site
                </TypographyP>
              </li>
            </ul>
          </div>

          <TypographyH4>VIRUSES</TypographyH4>

          <TypographyP className="!mt-0">
            We do not guarantee that our site will be secure or free from bugs or viruses. You are
            responsible for configuring your information technology, computer programmes and
            platform in order to access our site. You must not misuse our site by knowingly
            introducing viruses, trojans, worms, logic bombs or other material which is malicious or
            technologically harmful. You must not attempt to gain unauthorized access to our site,
            the server on which our site is stored or any server, computer or database connected to
            our site. You must not attack our site via a denial-of-service attack or a distributed
            denial-of service attack. By breaching this provision, you would commit a criminal
            offense under the Indian Information Technology Act, 2000. We will report any such
            breach to the relevant law enforcement authorities and we will cooperate with those
            authorities by disclosing your identity to them. In the event of such a breach, your
            right to use our site will cease immediately.
          </TypographyP>

          <TypographyH4>APPLICABLE LAW</TypographyH4>

          <TypographyP className="!mt-0">
            These terms of use, its subject matter and its formation (and any non-contractual
            disputes or claims) are governed by Indian Judiciary law and state judiciary law of
            Assam. We both agree to the exclusive jurisdiction of the courts of India and Assam.
            <br />
            <br />
            In case of any grievances, please write to our grievance officer at contact@agspert.com
          </TypographyP>
        </section>
      </Template>
    </React.Fragment>
  );
}
