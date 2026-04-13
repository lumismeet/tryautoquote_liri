import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | TryAutoQuote",
  description: "Privacy Policy for TryAutoQuote.com, operated by Luminarix, LLC.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-32 space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last Updated: 03/16/2025</p>
        </div>

        <p>
          Thank you for using our website located at tryautoquote.com (&ldquo;Website&rdquo;), through which we offer various applications, widgets, email notifications and other services (&ldquo;Services&rdquo;). TryAutoQuote (&ldquo;TryAutoQuote,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) has created this Privacy Policy to let you know what information we collect when you visit the Website, and how we use and share this information.
        </p>

        <p>This Website and the Services are intended for U.S. residents only.</p>

        <Section title="What We Do">
          <p>
            We help consumers shop for insurance, discounted health plans, and other products by connecting consumers with insurance companies, insurance agents, discount program representatives, and vendors who also help match consumers with insurance providers and other third parties (&ldquo;Service Providers&rdquo;).
          </p>
        </Section>

        <Section title="Information Collection">
          <p>
            When using our Website, you may voluntarily provide information about yourself, including your name, home address, telephone number, email address, date of birth, gender, and income. We may also collect current insurance information, type of automobile you drive, home ownership status, military affiliation, credit score, and other demographic information that you provide to us.
          </p>
          <p className="mt-3">
            We (and other entities) may also automatically collect information relating to your interactions with us and our Website, including internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date and time of visit, internet tags, device type, clickstream data, and other activities on the Website. We may combine this automatically collected information with other information we collect about you. We do this to improve services we offer you, and to improve marketing, analytics, and Website functionality. We and our marketing partners, affiliates, and analytics and service providers use technologies such as cookies, beacons, tags, and scripts to collect this data. These technologies are used in analyzing trends, administering the Website, tracking users&apos; movements around the Website, and gathering demographic information about our user base. You can set your browser to reject cookies. If you reject cookies, you may still use the Website, but your ability to use some features or areas of our Website may be limited.
          </p>
        </Section>

        <Section title="Information Use">
          <p>We may use your information for any lawful purpose, including the following:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>To deliver our products and services to you (including matching you with insurance providers and Service Providers);</li>
            <li>To perform services, such as account servicing, processing orders and payments, and analytics;</li>
            <li>To maintain and improve our services;</li>
            <li>To display customized content and advertising;</li>
            <li>To conduct research and analysis (including internal research for technological improvement);</li>
            <li>To ensure that the Website is functioning properly (including debugging);</li>
            <li>To aid us in developing new services;</li>
            <li>To aid us in internal operations (including auditing our interactions with you);</li>
            <li>To alert you to product updates, special offers, updated information, and other new services;</li>
            <li>To contact you in response to your requests for information;</li>
            <li>To send newsletters and other information to you;</li>
            <li>To provide you quotes from Service Providers who may contact you using the information you provide;</li>
            <li>To detect and protect against security incidents, fraud, and illegal activity;</li>
            <li>To ensure legal compliance;</li>
            <li>To obtain additional information needed from you; and</li>
            <li>With your consent, or as otherwise disclosed at the time information is collected.</li>
          </ul>
        </Section>

        <Section title="Information Sharing">
          <p>We may share the information we collect with other parties, including the following:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Insurance providers and Service Providers;</li>
            <li>Advertising networks;</li>
            <li>Internet service providers;</li>
            <li>Data analytics providers;</li>
            <li>Operating systems and platforms;</li>
            <li>Social networks;</li>
            <li>Consumer data resellers;</li>
            <li>Our subsidiaries, corporate affiliates, and related companies, including any that we may have in the future;</li>
            <li>Our vendors and service providers for the purpose of verifying data and where such access is incidental to their providing us services, such as phone number verification services and email service providers;</li>
            <li>Pursuant to a subpoena, court order, governmental inquiry, or other legal process or as otherwise required by law, to protect our rights or the rights of Service Providers, or to protect the safety or security of any person or entity;</li>
            <li>As part of a corporate sale, merger, or acquisition, or other transfer of all or part of our assets, including as part of a bankruptcy proceeding;</li>
            <li>As part of a promotion or program (e.g. sweepstakes, contests, giveaways, or other promotions) that you choose to participate in that is offered by us, either alone or with third parties;</li>
            <li>With your consent or as otherwise disclosed at the time of data collection and sharing.</li>
          </ul>
          <p className="mt-3">We may share information that has been de-identified or aggregated without limitation.</p>
        </Section>

        <Section title="Your Consent to Text Message and Telephone Marketing">
          <p>
            By submitting your telephone number on the Website, you expressly authorize us and Service Providers and their agents and partner companies to contact you, at the telephone number you provide, with informational and marketing messages and telephone calls including those sent via automated telephone dialing system, text messages, SMS, MMS, picture messages, live and prerecorded telephone calls, including on landlines and wireless numbers, even if the phone number you provide is on a corporate, state, or national Do Not Call list. Your consent is not required to purchase goods or services. Message &amp; data rates may apply. You may revoke your consent at any time by contacting us at:{" "}
            <a href="/contact" className="text-violet-600 underline hover:text-violet-800">tryautoquote.com/contact</a>{" "}
            or by writing to us at{" "}
            <a href="mailto:support@tryautoquote.com" className="text-violet-600 underline hover:text-violet-800">support@tryautoquote.com</a>.
          </p>
        </Section>

        <Section title="Third Party Links and Tools">
          <p>
            Our Website may provide links to third-party websites and services. We do not control the privacy practices of those websites or services, and they are not covered by this Privacy Policy. You should review the privacy policies of other websites that you use to learn about their data practices.
          </p>
          <p className="mt-3">
            Additionally, certain personally identifiable information may be made available to third parties using our Application Programming Interface (&ldquo;API&rdquo;). Use of third-party applications developed using our API are subject to the terms of use and privacy policies of such third-party developers. You should be aware that such third-party applications may share user information. Further, as explained more below, we may use third-party services such as Google Analytics to help us understand how users use the Website or Service and to improve the ways in which we interact with users, including the refinement of interest-based ads displayed to users. Such services, including Google Analytics, may collect information about your use of the Website or Service through cookies, advertising identifiers, and other technologies. The collection and use of data by such third parties, including Google Analytics, are subject to their privacy policies.
          </p>
        </Section>

        <Section title="Your Choices">
          <p>
            When you submit personally identifiable information to us, you agree to receive email, fax, telephone, text messages, and other forms of communications from or on behalf of us and third parties with whom we share your information. If you would like to opt-out of receiving promotional or marketing material from us in the future, please follow the opt-out instructions located at the bottom of each promotional or marketing email communication or email us at{" "}
            <a href="mailto:support@tryautoquote.com" className="text-violet-600 underline hover:text-violet-800">support@tryautoquote.com</a>. Please note that even if you opt-out of receiving marketing messages from us, you may continue to receive messages concerning any transaction you make with us or comments or inquiries you submit to us.
          </p>
          <p className="mt-3">
            If you would like to opt-out of having your information shared with third parties for their direct marketing purposes, you may write to us at{" "}
            <a href="mailto:support@tryautoquote.com" className="text-violet-600 underline hover:text-violet-800">support@tryautoquote.com</a>. If you do not wish to receive communications from any person or entity with whom we have shared your information for their marketing purposes, you must contact them directly.
          </p>
          <p className="mt-3">
            For choices with respect to third-party interest-based advertising activities, please see the &ldquo;Digital Advertising &amp; Analytics&rdquo; section below.
          </p>
        </Section>

        <Section title="Digital Advertising and Analytics">
          <p>
            TryAutoQuote adheres to the Digital Advertising Alliance (&ldquo;DAA&rdquo;) Self-Regulatory Principles in connection with interest-based advertising. We may partner with ad networks and other ad serving providers (&ldquo;Advertising Providers&rdquo;) that serve ads on behalf of us and others on non-affiliated platforms. Some of those ads may be personalized, meaning that they are intended to be relevant to you based on information Advertising Providers collect about your use of the Website and other websites or apps over time, including information about relationships among different browsers and devices. This type of advertising is known as interest-based advertising.
          </p>
          <p className="mt-3">
            You may visit the DAA Webchoices tool at{" "}
            <a href="https://www.aboutads.info" className="text-violet-600 underline hover:text-violet-800" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>{" "}
            to learn more about this type of advertising and how to opt out of this advertising on websites by companies participating in the DAA self-regulatory program. You can also exercise choices regarding interest-based advertising on your mobile device by downloading the appropriate version of the DAA&apos;s AppChoices tool at{" "}
            <a href="https://youradchoices.com/appchoices" className="text-violet-600 underline hover:text-violet-800" target="_blank" rel="noopener noreferrer">https://youradchoices.com/appchoices</a>.
          </p>
          <p className="mt-3">
            If you delete your cookies or use a different browser or mobile device, you may need to renew your opt-out choices exercised through the DAA Webchoices tool. Note that electing to opt out will not stop advertising from appearing in your browser or applications. It may make the ads you see less relevant to your interests. Additionally, your browser may offer tools to limit the use of cookies or to delete cookies; however, if you use these tools, our Website may not function as intended.
          </p>
          <p className="mt-3">
            We may also work with third parties that collect data about your use of the Website and other sites or apps over time for non-advertising purposes. We use Google Analytics and other third-party services to improve the performance of the Website and for analytics and marketing purposes. For more information about how Google Analytics collects and uses data when you use our Website, visit{" "}
            <a href="https://www.google.com/policies/privacy/partners" className="text-violet-600 underline hover:text-violet-800" target="_blank" rel="noopener noreferrer">www.google.com/policies/privacy/partners</a>, and to opt out of Google Analytics, visit{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-violet-600 underline hover:text-violet-800" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.
          </p>
        </Section>

        <Section title="State Privacy Rights">
          <p>
            Residents of certain states have rights under state privacy laws with respect to personal information we collect. If you are a resident of such states, this section of the Privacy Policy contains disclosures required by law and explains rights that may be available to you.
          </p>

          <SubSection title="Personal Information We Collect and Disclose">
            <p>In the preceding 12 months, we collected, disclosed for a business purpose, and sold the following categories of personal information about consumers:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Personal and online identifiers (such as first and last name, email address, or unique online identifiers);</li>
              <li>Recordkeeping information (such as physical characteristics or description, insurance policy number, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information);</li>
              <li>Characteristics of legally protected classifications (such as race, gender);</li>
              <li>Status as transgender or nonbinary;</li>
              <li>Commercial or transactions information (such as records of personal property or products or services purchased, obtained or considered);</li>
              <li>Internet or other electronic network activity information (such as browsing history, search history, interactions with a website, email, application, or advertisement);</li>
              <li>Geolocation information;</li>
              <li>Professional or employment-related information;</li>
              <li>Education information;</li>
              <li>Inferences drawn from the above information about your predicted characteristics and preferences;</li>
              <li>Sensory information (such as audio, electronic, visual, thermal, olfactory, or similar information); and</li>
              <li>Other information about you that is linked to the personal information above.</li>
            </ul>
          </SubSection>

          <SubSection title="Sensitive Personal Information">
            <p>
              Some of the categories of personal information listed above are considered sensitive personal information under certain state privacy laws. <strong>NOTICE: We may sell your sensitive personal data.</strong>
            </p>
          </SubSection>

          <SubSection title="Categories of Sources">
            <p>We collect personal information from the following categories of sources:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Consumers; and</li>
              <li>Service providers.</li>
            </ul>
          </SubSection>

          <SubSection title="Our Purposes for Processing Personal Information">
            <p>
              We use and disclose the personal information we collect for our commercial and business purposes, as further described above in the &ldquo;Information Use&rdquo; section of this Privacy Policy.
            </p>
          </SubSection>

          <SubSection title="Recipients of Personal Information">
            <p>
              We disclose the categories of personal information designated above in the &ldquo;Information Sharing&rdquo; section of this Privacy Policy for commercial and business purposes.
            </p>
            <p className="mt-3">We sell the categories of personal information designated above to the categories of third parties listed below:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Advertising/marketing companies;</li>
              <li>Advertising networks;</li>
              <li>Marketing data companies;</li>
              <li>Data analytics providers;</li>
              <li>Operating systems and platforms;</li>
              <li>Consumer data resellers;</li>
              <li>Financial services companies; and</li>
              <li>Insurance companies and Brokers.</li>
            </ul>
          </SubSection>

          <SubSection title="Your Rights Regarding Personal Information">
            <p>
              Residents of certain states have rights with respect to the personal information collected by businesses. If you are a resident in one of these states, you may exercise the following rights regarding your personal information, subject to certain exceptions and limitations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The right to confirm whether we are processing personal information about you.</li>
              <li>The right to correct inaccuracies in the personal information we have collected about you.</li>
              <li>The right to know the categories and specific pieces of personal information we collect, use, disclose, and sell about you, the categories of sources from which we collected your personal information, our purposes for collecting or selling your personal information, the categories of your personal information that we have either sold or disclosed for a business purpose, and the categories of third parties with which we have shared personal information.</li>
              <li>Depending on your state, the right to receive a portable and readily usable copy of the personal information we have collected about you, to the extent feasible.</li>
              <li>The right to request that we delete the personal information we have collected from you.</li>
              <li>The right to opt out of (i) the sharing of personal information for targeted advertising; (ii) the sale(s) of personal information; or (iii) profiling for decisions that have significant effects. Please note that if you opt out of certain types of sales, we will be unable to provide you with the services that rely on such sales.</li>
              <li>
                Choice regarding sensitive information. Depending on your state, you can:
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Limit our processing of certain &ldquo;sensitive&rdquo; personal information;</li>
                  <li>Opt out of our processing of certain &ldquo;sensitive&rdquo; information; or</li>
                  <li>Withdraw consent for such processing if you previously gave it.</li>
                </ul>
              </li>
              <li>The right not to receive discriminatory treatment for the exercise of the above privacy rights.</li>
            </ul>
            <p className="mt-3">To exercise any of the above rights, please contact us using the following information and submit the required verifying information, as further described below:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>To opt out of sales of personal information or the sharing of personal information for interest-based advertising, click the &ldquo;Do Not Sell or Share My Personal Information&rdquo; link in the footer of the website.</li>
              <li>By email at <a href="mailto:privacyrights@tryautoquote.com" className="text-violet-600 underline hover:text-violet-800">privacyrights@tryautoquote.com</a></li>
            </ul>
            <p className="mt-3">
              Additionally, for residents of certain states, if you have submitted a request that we have not reasonably fulfilled, you may contact us to appeal our decision by sending an email with the subject line &ldquo;Appeal - [Insert Your State of Residence]&rdquo; to{" "}
              <a href="mailto:support@tryautoquote.com" className="text-violet-600 underline hover:text-violet-800">support@tryautoquote.com</a>.
            </p>
          </SubSection>

          <SubSection title="Verification Process and Required Information">
            <p>
              We might need to request information from you to verify your identity or understand the scope of your request, although you will not be required to create an account with us to submit a request or have it fulfilled. We require you to provide, at a minimum, your first and last name, email address, city, zip code, and telephone number in order to verify your identity and honor your request. If we cannot successfully verify your identity, or if the information would be too sensitive to disclose, we may not be able to provide the personal information to you.
            </p>
          </SubSection>

          <SubSection title="Authorized Agent">
            <p>
              Depending on your state of residence, you may designate an authorized agent to make requests on your behalf by providing them written permission to submit a request. If you designate an authorized agent to make a request on your behalf, we will require the agent to submit proof of your written authorization by email at{" "}
              <a href="mailto:privacyrights@tryautoquote.com" className="text-violet-600 underline hover:text-violet-800">privacyrights@tryautoquote.com</a>{" "}
              as well as your verification details, including your first and last name, email address, city, zip code, and telephone number. We may request additional information to verify the request.
            </p>
          </SubSection>

          <SubSection title="Minors' Rights">
            <p>We do not have actual knowledge that we sell the personal information of minors (individuals under 18 years of age).</p>
          </SubSection>
        </Section>

        <Section title="Changes to Our Privacy Policy">
          <p>
            We may occasionally update this Privacy Policy. When we make changes, we will also post the &ldquo;last update&rdquo; on the Privacy Policy. We encourage you to periodically review this Privacy Policy to stay informed about how we use and share the information we collect.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have any questions, comments, or concerns about us or this Privacy Policy, please contact us via email at{" "}
            <a href="mailto:support@tryautoquote.com" className="text-violet-600 underline hover:text-violet-800">support@tryautoquote.com</a>.
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-black">{title}</h2>
      <div className="space-y-3 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 space-y-2">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
