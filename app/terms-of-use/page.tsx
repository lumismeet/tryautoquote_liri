import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | FindAutoQuote",
  description: "Terms of Use for FindAutoQuote.com, operated by Luminarix, LLC.",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-32 space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Terms of Use Agreement</h1>
          <p className="text-sm text-gray-500">Last Updated: March 11, 2026</p>
        </div>

        <p className="font-semibold text-gray-900">
          PLEASE READ THESE TERMS CAREFULLY. THIS AGREEMENT CONTAINS AN ARBITRATION AGREEMENT, A WAIVER OF YOUR RIGHT TO A JURY TRIAL, AND A WAIVER OF YOUR RIGHT TO BRING A CLASS ACTION. BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS.
        </p>

        <p>
          This Terms of Use Agreement (&ldquo;Agreement&rdquo;) governs your access to and use of the websites, mobile applications, and services operated by Luminarix, LLC and its subsidiaries and affiliates (collectively, &ldquo;Luminarix,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), including <strong>www.findautoquote.com</strong> (collectively, the &ldquo;Websites&rdquo;). &ldquo;You&rdquo; or &ldquo;user&rdquo; refers to any individual accessing or using the Websites. &ldquo;Providers&rdquo; refers to insurance carriers, agents, and other partners available through our platform. &ldquo;Qualification Form&rdquo; refers to any inquiry or request form you complete on the Websites.
        </p>

        <Section title="1. Modifications and Eligibility">
          <p>
            Luminarix reserves the right to modify this Agreement or the Websites at any time, in its sole discretion. Changes take effect immediately upon posting. Your continued use of the Websites following any changes constitutes your acceptance of the revised Agreement. You are responsible for reviewing this Agreement periodically.
          </p>
          <p className="mt-3">
            The Websites and Services are intended solely for individuals who are 18 years of age or older and are accessing the Websites from within the United States. By using the Websites, you represent and warrant that you meet these eligibility requirements.
          </p>
        </Section>

        <Section title="2. Additional Terms">
          <p>
            Certain features or services available through the Websites may be subject to additional terms and conditions (&ldquo;Additional Terms&rdquo;). Such Additional Terms are incorporated by reference into this Agreement. In the event of a conflict between this Agreement and any Additional Terms, the Additional Terms shall control with respect to the applicable feature or service.
          </p>
        </Section>

        <Section title="3. Privacy Policy">
          <p>
            Our <Link href="/privacy-policy" className="text-violet-600 underline hover:text-violet-800">Privacy Policy</Link> is incorporated by reference into this Agreement and explains how we collect, use, disclose, and protect your personal information. By using the Websites, you consent to the data practices described in our Privacy Policy.
          </p>
          <p className="mt-3">
            You authorize Luminarix to share your information with its affiliates, non-affiliates, and third-party Providers as described in the Privacy Policy, including for purposes of regulatory compliance, marketing analytics, and delivering the products and services you request. We retain your information as required by applicable law and as described in our Privacy Policy.
          </p>
        </Section>

        <Section title="4. Electronic Communications and Notices">
          <p>
            By using the Websites, you agree to receive all notices, disclosures, agreements, and other communications from Luminarix electronically. You agree to conduct business with Luminarix electronically. Electronic communications satisfy any legal requirement that such communications be in writing, to the fullest extent permitted by applicable law.
          </p>
        </Section>

        <Section title="5. Ownership Rights">
          <p>
            All content on the Websites — including but not limited to text, graphics, photographs, videos, audio clips, trademarks, logos, software, and code — is owned by or licensed to Luminarix and is protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Websites for personal, non-commercial purposes only.
          </p>
          <p className="mt-3">
            No portion of the Websites or its content may be copied, reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, or distributed in any way without the express prior written permission of Luminarix. You agree to abide by all exclusionary protocols such as robots.txt and ACAP.
          </p>
        </Section>

        <Section title="6. Code of Conduct">
          <p>You are solely responsible for your conduct on the Websites. You agree that you will not:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Alter or remove any copyright, trademark, or other proprietary notices on the Websites;</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of any software on the Websites;</li>
            <li>Create derivative works based on the Websites or any content thereon without our express written consent;</li>
            <li>Engage in any conduct that violates applicable laws, infringes the rights of others, or negatively affects the reputation or goodwill of Luminarix;</li>
            <li>Disrupt or interfere with the security, operation, or availability of the Websites or the servers and networks connected to the Websites;</li>
            <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity;</li>
            <li>Solicit passwords or personal information from other users for unlawful purposes;</li>
            <li>Access or use the Websites or any content thereon to train any artificial intelligence and/or machine learning model or system without the express prior written consent of Luminarix;</li>
            <li>Engage in spamming, phishing, harvesting of personal information, or any other unsolicited commercial communications;</li>
            <li>Use any robot, spider, scraper, or other automated means to access, collect, or extract data from the Websites without our express written permission.</li>
          </ul>
        </Section>

        <Section title="7. Ratings, Reviews, and User-Generated Content">
          <p>
            Any ratings, reviews, comments, or other user-generated content you submit to the Websites or our social media channels is governed by our Ratings &amp; Reviews and User-Generated Content policy, which is incorporated herein by reference. By submitting any content, you grant Luminarix a non-exclusive, royalty-free, perpetual, worldwide license to use, reproduce, modify, and display such content in connection with our Services.
          </p>
        </Section>

        <Section title="8. Copyright Violations">
          <p>
            If you believe that any content on the Websites infringes your copyright, please contact us with the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>A description of the copyrighted work you claim has been infringed;</li>
            <li>The location on the Websites where the allegedly infringing material is located;</li>
            <li>Your name, address, telephone number, and email address;</li>
            <li>A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
            <li>A statement, made under penalty of perjury, that the above information is accurate and that you are the copyright owner or are authorized to act on the copyright owner&apos;s behalf.</li>
          </ul>
          <p className="mt-3">
            Please send copyright infringement notices to: <a href="mailto:support@findautoquote.com" className="text-violet-600 underline">support@findautoquote.com</a>
          </p>
        </Section>

        <Section title="9. Chatbots and AI-Powered Tools">
          <p>
            Luminarix may use chatbots and other AI-powered tools on the Websites to assist with customer service and support. These tools use a combination of pre-programmed scripts, machine learning, and generative AI. Chatbot responses may be inaccurate, inappropriate, or unreliable, and Luminarix cannot guarantee their accuracy or completeness.
          </p>
          <p className="mt-3">
            You agree that your use of chatbots and AI-powered tools is limited to customer service and support inquiries related to our Services. You should not input sensitive personal or financial information, such as account details, Social Security numbers, or payment information, into any chatbot. You are solely responsible for evaluating and verifying any output generated through a chatbot or AI-powered tool. Luminarix and its affiliates shall not be liable for any damages arising from your reliance on chatbot-generated content.
          </p>
          <p className="mt-3">
            Luminarix may create and store transcripts of your chatbot interactions and use such transcripts for quality control, fraud prevention, security, and service optimization.
          </p>
        </Section>

        <Section title="10. Links to Third-Party Websites">
          <p>
            The Websites may contain links to third-party websites that are not owned or operated by Luminarix. Such links are provided solely for your convenience and do not constitute an endorsement or recommendation by Luminarix of the linked site or its content. Luminarix does not control, and is not responsible for, the content, privacy practices, or availability of any third-party websites.
          </p>
          <p className="mt-3">
            Your use of any third-party website is subject to the terms and conditions and privacy policies of that website. Luminarix shall not be liable for any damages or losses arising from your use of any third-party website.
          </p>
        </Section>

        <Section title="11. Disclaimers and Limitation of Liability">
          <p className="font-semibold">
            THE WEBSITES, CONTENT, AND SERVICES ARE PROVIDED FOR USE &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
          </p>
          <p className="mt-3">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, LUMINARIX DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, TITLE, AND NON-INFRINGEMENT. LUMINARIX DOES NOT WARRANT THAT THE WEBSITES WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
          <p className="mt-3">
            IN NO EVENT SHALL LUMINARIX, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE WEBSITES OR SERVICES, EVEN IF LUMINARIX HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p className="mt-3">
            You are solely responsible for any information you provide through the Websites. Luminarix is not responsible for any errors or inaccuracies resulting from information you provide.
          </p>
        </Section>

        <Section title="12. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless Luminarix and its affiliates, directors, officers, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the Websites or Services; (b) your violation of this Agreement; (c) your violation of any applicable law or the rights of any third party; or (d) any content you submit to the Websites.
          </p>
        </Section>

        <Section title="13. Governing Law and Dispute Resolution">
          <p>
            This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles. Any dispute arising out of or related to this Agreement or your use of the Websites shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened misappropriation or infringement of intellectual property rights.
          </p>
          <p className="mt-3 font-semibold">
            BY AGREEING TO THESE TERMS, YOU WAIVE YOUR RIGHT TO A JURY TRIAL AND YOUR RIGHT TO PARTICIPATE IN ANY CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
          </p>
        </Section>

        <Section title="14. Termination">
          <p>
            Luminarix reserves the right, in its sole discretion, to suspend or terminate your access to the Websites at any time and for any reason, including without limitation if Luminarix reasonably believes that you have violated this Agreement. Upon termination, all licenses and rights granted to you under this Agreement will immediately cease.
          </p>
        </Section>

        <Section title="15. Miscellaneous">
          <p>
            This Agreement constitutes the entire agreement between you and Luminarix with respect to the subject matter hereof and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings. If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. Luminarix&apos;s failure to enforce any provision of this Agreement shall not be deemed a waiver of such provision.
          </p>
        </Section>

        <Section title="16. Contact Us">
          <p>If you have any questions about these Terms of Use, please contact us:</p>
          <ul className="mt-3 space-y-1">
            <li><strong>Email:</strong> <a href="mailto:support@findautoquote.com" className="text-violet-600 underline">support@findautoquote.com</a></li>
            <li><strong>Phone:</strong> (480) 555-0103</li>
            <li>
              <strong>Mail:</strong>
              <address className="not-italic mt-1 ml-4">
                Legal Department<br />
                Luminarix, LLC<br />
                457 Washington Ave<br />
                United States
              </address>
            </li>
          </ul>
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
