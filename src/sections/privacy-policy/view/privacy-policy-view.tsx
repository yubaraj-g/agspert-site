import * as React from "react";
import Link from "next/link";

import { TypographyH1, TypographyH2, TypographyH4, TypographyP } from "@/components/typography";
import Template from "@/layouts/template";

export default function TermsOfServiceView() {
  return (
    <React.Fragment>
      <Template>
        <section className="mt-28 container pt-8 flex flex-col gap-8">
          <TypographyH1>Privacy Policy</TypographyH1>

          <TypographyH2>We may collect and process the following data about you:</TypographyH2>

          <ul className="flex flex-col w-full gap-4">
            <li>
              <TypographyH4>Information you give us: </TypographyH4>

              <TypographyP className="!mt-0 ml-4">
                You may give us information about you on our website&nbsp;
                <Link className="text-primary hover:text-foreground hover:underline" href="https://www.agspert.com">www.agspert.com</Link> or&nbsp;
                <Link className="text-primary hover:text-foreground hover:underline" href="https://site.agspert.com">https://site.agspert.com</Link> or via the
                interactive features of our web application and mobile app &quot;AgSpeak&quot; and services
                (&quot;our site&quot;), or by corresponding with us by phone, SMS, e-mail or otherwise. This
                includes information you provide when you register to use our site, subscribe to our
                service, participate in discussion boards or other social functions on our site and
                when you report a problem with our site. The information you give us may include
                your name, country of residence, gender, date of birth, email address, phone number
                and descriptions of your expertise and preferences.
              </TypographyP>
            </li>

            <li>
              <TypographyH4>Information we collect about you: </TypographyH4>

              <TypographyP className="!mt-0 ml-4">
                With regard to each of your visits to our site we may automatically collect
                technical information (including the IP address used to connect your computer to the
                internet, your login information, browser type and version, time zone setting,
                operating system and platform), or other information about your visit (including the
                URL clickstream to, through and from our site (including date and time), download
                errors, length of visits to certain pages and page interaction information.
              </TypographyP>
            </li>
          </ul>

          <TypographyH2>USES MADE OF THE INFORMATION</TypographyH2>

          <TypographyH4>We use information held about you in the following ways: </TypographyH4>

          <ul className="list-disc pl-4">
            <li>to provide you with the information and services that you request.</li>
            <li>to notify you about changes to our service.</li>
            <li>
              to provide you, or permit selected third parties to provide you, with information
              about goods or services we feel may interest you. Where we permit selected third
              parties to use your data, we (or they) will contact you by electronic means only if
              you have consented to this. If you do not want us to use your data in this way, or to
              pass your details on to third parties for marketing purposes, please tick the relevant
              box situated on the form on which we collect your data.
            </li>
          </ul>

          <TypographyH4>
            Information we collect about you. We will use this information:
          </TypographyH4>

          <ul className="list-disc pl-4">
            <li>
              to administer our site and for internal operations, including troubleshooting, data
              analysis, testing, research, statistical and survey purposes
            </li>
            <li>
              to improve our site to ensure that content is presented in the most effective manner
              for you; as part of our efforts to keep our site safe and secure
            </li>
            <li>
              to measure or understand the effectiveness of advertising we serve to you and
              others,and to deliver relevant advertising to you.
            </li>
          </ul>

          <TypographyH2>DISCLOSURE OF YOUR INFORMATION</TypographyH2>

          <TypographyH4>
            We may share your information with selected third parties including:
          </TypographyH4>

          <ul className="list-disc ml-4">
            <li>
              business partners, suppliers and subcontractors for the performance of any contract we
              enter into with them.
            </li>
            <li>
              Advertisers that require the data to select and serve relevant adverts to you and
              others. We do not disclose information about identifiable individuals to our
              advertisers, but we may provide them with aggregate information about our users. We
              may also use such aggregate information to help advertisers reach the kind of audience
              they want to target.
            </li>
            <li>
              Analytics and search engine providers that assist us in the improvement and
              optimization of our site.
            </li>
          </ul>

          <TypographyP className="!mt-0">
            We may disclose your personal information to third parties in the event that we sell or
            buy any business or assets (in which case we may disclose your personal data to the
            prospective seller or buyer of such business or assets), or in instances where we are
            under a duty to disclose or share your personal data in order to comply with any legal
            obligation or in order to enforce or apply our terms of use.
          </TypographyP>

          <TypographyH2>WHERE WE STORE YOUR PERSONAL DATA</TypographyH2>

          <TypographyP className="!mt-0">
            The data that we collect from you may be transferred to, and stored at, a destination
            inside India. By submitting your personal data, you agree to this transfer, storing or
            processing. We will take all steps reasonably necessary to ensure that your data is
            treated securely and in accordance with this privacy policy.
          </TypographyP>

          <TypographyP className="!mt-0">
            Where we have given you (or where you have chosen) a password which enables you to
            access certain parts of our site, you are responsible for keeping this password
            confidential. We ask you not to share a password with anyone.
          </TypographyP>

          <TypographyP className="!mt-0">
            Unfortunately, the transmission of information via the internet is not completely
            secure. Although we will do our best to protect your personal data, we cannot guarantee
            the security of your data transmitted to our site; any transmission is at your own risk.
            Once we have received your information, we will use strict procedures and security
            features to try to prevent unauthorized access.
          </TypographyP>

          <TypographyH2>THIRD PARTY LINKS</TypographyH2>

          <TypographyP className="!mt-0">
            Our site may, from time to time, contain links to and from the websites of our partner
            networks, advertisers and affiliates. If you follow a link to any of these websites,
            please note that these websites have their own privacy policies and that we do not
            accept any responsibility or liability for these policies. Please check these policies
            before you submit any personal data to these websites.
          </TypographyP>

          <TypographyH2>COOKIES</TypographyH2>

          <TypographyP className="!mt-0">
            Our website uses cookies to distinguish you from other users of our website. This helps
            us to provide you with a good experience when you browse our website and also allows us
            to improve our site. For further information on the cookies we use and the purposes for
            which we use them see our Cookie policy.
          </TypographyP>

          <TypographyH2>CHANGES TO OUR PRIVACY POLICY</TypographyH2>

          <TypographyP className="!mt-0">
            Any changes we may make to our privacy policy in the future will be posted on this page.
            Please check back frequently to see any updates or changes to our privacy policy.
          </TypographyP>

          <TypographyP className="!mt-0">
            In case of any grievances, please write to our grievance officer at contact@agspert.com
          </TypographyP>
        </section>
      </Template>
    </React.Fragment>
  );
}
