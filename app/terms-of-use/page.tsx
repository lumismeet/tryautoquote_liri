import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | TryAutoQuote",
  description: "Terms of Use for TryAutoQuote.com, operated by Luminarix, LLC.",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-32 space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm text-gray-500">Last Updated: 03/16/2025</p>
        </div>

        <p>
          Welcome to the website located at tryautoquote.com (the &ldquo;Website&rdquo; or &ldquo;Site&rdquo;), which we (&ldquo;we&rdquo;, &ldquo;us,&rdquo; etc.) provide to you (&ldquo;you&rdquo;) contingent upon your agreement to these Terms of Use and Privacy Policy. By accessing the Website or using the Service (as defined below), you agree to be bound by and comply with the following Terms of Use including the Privacy Policy.
        </p>

        <p>
          By accessing or using the Website or our Services (as defined below), you acknowledge that you have read, understood, and agree to be bound by the terms and conditions of these Terms &amp; conditions (this &ldquo;Agreement&rdquo; or &ldquo;Terms&rdquo;) and our Privacy Policy (the &ldquo;Privacy Policy&rdquo;), which is incorporated herein by reference. If you do not agree to the Terms of Use or Privacy Policy, you may not access or use the Website.
        </p>

        <p className="font-semibold text-gray-900">
          THIS AGREEMENT CONTAINS AN ARBITRATION AGREEMENT AND CLASS ACTION WAIVER THAT WAIVE YOUR RIGHT TO A COURT HEARING OR JURY TRIAL OR TO PARTICIPATE IN A CLASS ACTION. ARBITRATION IS MANDATORY AND THE EXCLUSIVE REMEDY FOR ANY AND ALL DISPUTES UNLESS SPECIFIED BELOW OR UNLESS YOU OPT-OUT.
        </p>

        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Third Party Offerings</li>
          <li>Acceptance Policy</li>
          <li>Payment</li>
          <li>Email, Telephone, and SMS Communication</li>
          <li>You Are Responsible for Your Financial Decisions</li>
          <li>No Representation Regarding Third Party Content</li>
          <li>Intellectual Property</li>
          <li>Copyright Infringement</li>
          <li>Disclaimer of Warranties; Limitation of Liabilities</li>
          <li>Dispute Resolution by Binding Mandatory Arbitration and Class Action Waiver</li>
          <li>Electronic Communications</li>
          <li>Miscellaneous</li>
        </ul>

        <Section title="Third Party Offerings">
          <p>
            Our aim is to connect users with insurance brokers, insurance companies, insurance brokers, insurance agents, discount program representatives and other insurance professionals (&ldquo;Service Providers&rdquo;). The Website offers various applications, widgets, email notifications and other services (the &ldquo;Service&rdquo; or &ldquo;Services&rdquo;) that provide a venue through which you can obtain information and find Service Providers. You understand and agree that we are not the issuer of the products featured on the Website, we are not an insurance underwriter, do not endorse or recommend the products or services of any Service Provider, and are not an agent or advisor to you or any service provider. We do not validate or investigate the licensing, certification or other requirements and qualifications of Service Providers.
          </p>
        </Section>

        <Section title="Acceptance Policy">
          <p>
            We reserve the right at any time after receipt of your request to further transfer the request or decline your request for any reason. We may require additional verification or other information, which may include health information and medical history, financial information, the make and model of your vehicle, driving records, etc. before further transferring any insurance request. Your receipt of an electronic or other form of confirmation does not signify acceptance of your insurance request, nor does it constitute confirmation of any offer to provide a policy. We are not responsible for requests that cannot be fulfilled or unsuccessful requests arising from an applicant&apos;s ineligibility to qualify for or otherwise obtain a policy, or an inability to pay premiums.
          </p>
          <p className="mt-3">
            <strong>Service Providers.</strong> We, as the operator of this Website, are not an insurance broker or an insurance company, are not a representative or an agent to any broker or insurance company, do not endorse any particular broker or insurance provider, and do not make any insurance decisions. We will submit the information you provide to a Service Provider. It is your sole responsibility to investigate Service Providers. You acknowledge and agree that Service Providers are solely responsible for any services that they may provide to you and that we are not liable for any losses, costs, damages or claims in connection with, arising from, or related to, your use of a Service Provider&apos;s products or services. You are solely responsible for your financial decisions, and we urge you to obtain the advice of financial advisors, insurance agents, brokers and other qualified professionals who are fully aware of your individual circumstances before you make any financial or insurance decisions. You acknowledge and agree that you rely on your own judgment and that of such advisors in selecting any products or services offered by Service Providers. Further, you acknowledge and agree that we are not a Service Provider, financial institution, insurance provider, or credit card provider. Our Services are limited to helping connect you with Service Providers. We do not, and will not, make any coverage or credit decision with any Service Provider referred to you. We do not issue mortgages, credit cards, insurance coverage or any other financial products. We do not make any warranties or representations regarding the quotes, fees, terms, rates, coverage or services offered or made available by Service Providers. This Website does not constitute an offer or solicitation for automobile or other insurance. Providing your information on this Website does not guarantee that you will be approved for automobile or other insurance. Not all insurance providers can or will insure your vehicle. The quotes, rates or savings advertised by/on this website are not necessarily available from all providers or advertisers. Your actual quotes, rates or savings will vary based on many different factors like: coverage limits, deductibles, driving history, education, occupation, type of vehicle, location, and more. We do not guarantee that quotes, fees, terms, rates, coverage or services offered by Service Providers are the best available. Results of using the Service may vary according to individual information provided. (Avg. monthly expenditure for auto insurance is $89 (based on the NAIC 2020/2021 Auto Insurance Database Report). In addition, we do not guarantee that you will be matched with a Service Provider. YOU ACKNOWLEDGE AND AGREE THAT WE ARE SOLELY AN INTERMEDIARY BETWEEN YOU AND SERVICE PROVIDERS, AND WE EXPRESSLY DISCLAIM LIABILITY FOR ANY CONTENT, PRODUCTS OR SERVICES PROVIDED BY SERVICE PROVIDERS. YOU RELEASE US OF ANY AND ALL LOSSES, COSTS, DAMAGES OR CLAIMS IN CONNECTION WITH, ARISING FROM, OR RELATED TO YOUR USE OF A SERVICE PROVIDER&apos;S PRODUCTS OR SERVICES.
          </p>
          <p className="mt-3 font-semibold">
            IMPORTANT NOTICE REGARDING CONSUMER REPORT PRACTICES. BY SUBMITTING YOUR INFORMATION TO THE WEBSITE, YOU ARE PROVIDING YOUR EXPRESS WRITTEN CONSENT UNDER ANY APPLICABLE LAW FOR THE WEBSITE AND SERVICE PROVIDERS TO PULL YOUR CONSUMER CREDIT PROFILE OR OTHER BACKGROUND INFORMATION ABOUT YOU. FOR EXAMPLE, CONSUMER AND CREDIT REPORTS AND DRIVING RECORDS MAY BE ORDERED IN CONNECTION WITH YOUR QUOTE REQUEST. THESE REPORTS MAY PROVIDE ADDITIONAL INFORMATION THAT MAY ASSIST SERVICE PROVIDERS IN DETERMINING YOUR ELIGIBILITY FOR THEIR PRODUCTS OR SERVICES, AND RATES THAT YOU MAY BE CHARGED. CONSUMER REPORTS MAY ALSO BE USED FOR UPDATES, RENEWALS, OR EXTENSIONS OF ANY INSURANCE YOU MAY OBTAIN. A PROVIDER MAY ALSO OBTAIN AND USE A CREDIT-BASED INSURANCE SCORE CONTAINED IN YOUR CREDIT REPORT. THIS INFORMATION MAY BE COMBINED BY A SERVICE PROVIDER WITH INFORMATION YOU SUBMIT TO US, AND BY SUBMITTING INFORMATION TO THE WEBSITE, YOU ACKNOWLEDGE THAT YOU ARE PROVIDING YOUR WRITTEN PERMISSION TO OUR SERVICE PROVIDERS TO OBTAIN YOUR CREDIT REPORT. ALTHOUGH SOME INQUIRIES WILL NOT AFFECT YOUR CREDIT SCORE, NOTE THAT CERTAIN PROVIDERS AND AFFILIATES MAY INITIATE A CREDIT INQUIRY THAT WILL IMPACT YOUR CREDIT SCORE.
          </p>
        </Section>

        <Section title="Your Access and Use of the Services">
          <p>
            You are under no obligation to use our Website or Service to initiate contact, nor apply for insurance or any product with any broker or insurance company. We receive compensation, in the form of referral fees, from the insurance carriers, aggregators, or other offers that we may direct you to. By downloading, accessing or using the Website, you represent that you are at least eighteen (18) years old or the legal age of majority in your jurisdiction, whichever is greater, that you are a resident of the United States of America, and that you agree to these Terms. The Website and its contents, including the information available on it, are intended for personal, non-commercial use only and only by U.S. residents. You agree to abide by all applicable federal, state, and local laws and regulations with respect to your use of the Website, and you shall provide only true, accurate, current, and complete information (and updates thereto) when submitting information through the Website. You shall only use the Website as permitted by this Agreement, and you shall not disrupt or intercept electronic information posted on this Website or on any of our servers or use the Website for any illegal or inappropriate purpose. We reserve the right, in our sole discretion, to change, modify, or eliminate, and restrict or block access to, all or any part of the Website, or to cancel any transaction, without notice, at any time, for any or no reason. You agree not to make any commercial use of the Service or the Website, including in particular, licensing, sale, transfer or other exploitation of the content of the Website or the Service.
          </p>
          <p className="mt-3">
            The information, data, software and content viewable on, contained in, or downloadable from the Website and the Services, including, without limitation, all software, text, graphics, charts, pictures, photographs, images, videos, line art, icons and renditions, and their selection, coordination, arrangement, presentation, display and enhancement (collectively, the &ldquo;Content&rdquo;) are copyrighted by, or otherwise licensed to, us or our suppliers. All Content is our property or the property of our software vendors and is protected by United States and international copyright laws. You shall not copy, distribute, redistribute, transmission, publication or use, other than the non-commercial use of the Content is permitted by you without our prior written permission. You shall not collect or harvest any personally identifiable information, including account names, from our Services. You shall not use any communication systems provided on our Services for any commercial or solicitation purposes. You shall not solicit for commercial purposes any users of our Services without our prior written permission.
          </p>
          <p className="mt-3">
            Subject to your agreement to these Terms, we grant you a limited license to access, print, download or otherwise make personal use of the Content in the form of: (i) one machine-readable copy; (ii) one backup copy; and (iii) one print copy, for your non-commercial use. You may not modify the Content or use it for any commercial purpose or any other public display, performance, sale, or rental, decompile, reverse engineer, or disassemble the Content, or transfer the Content to another person or entity. Any action by you that, in our sole discretion: (i) violates the terms and conditions of this Agreement or the Privacy Policy; (ii) restricts, inhibits or prevents any access, use or enjoyment of our Services; or (iii) through the use of our Services, defames, abuses, harasses, offends or threatens, shall not be permitted, and may result in your loss of the right to access and use our Services. You shall not modify, scrape, embed, frame, spider, deep link or use other similar automated data gathering or extraction tools, program, algorithm or methodology, meta tags or any other &ldquo;hidden text&rdquo; to access, acquire, copy or monitor our Website or Services or any portion of our Website or Services or for any other purpose, without our prior written permission.
          </p>
        </Section>

        <Section title="Payment">
          <p>
            Use of the Website and the Service may be subject to payment. However, we are not involved with and are not responsible for any fee arrangement that you may enter into with any Service Provider.
          </p>
        </Section>

        <Section title="Email, Telephone, and SMS Communication">
          <p>
            You must provide your email address and telephone number when registering to access any Service. By providing your email address or phone number on the Website, you expressly authorize us and our Service Providers to contact you by telephone, fax and email at the telephone numbers and email addresses provided, concerning (i) your insurance needs or quote requests, (ii) any issue regarding our Services, (iii) in response to quotes you have requested from us or our Service Providers, and (iv) to provide information or offers that may be of interest to you. We and our Service Providers may contact you at any telephone numbers, cellular or otherwise, that you provide us. You agree that such communications may be sent to your mobile phone via automated telephone dialing system, prerecorded calls, text messages, SMS, MMS, and picture messages, even if the phone number you provide is on a corporate, state or national Do Not Call list. Further, you agree to receive marketing emails even if you previously opted out of receiving marketing emails from us or from specific Service Providers. You also consent to us and Service Providers making automated or prerecorded calls or sending text messages to your mobile telephone number using automated technology, including but not limited to reminding you about deadlines or confirming your contact information. Your consent is not required to make a purchase. Without limiting anything in the Privacy Policy, you authorize Service Providers, and their affiliates and third-party service providers, to conduct all necessary research with your information, including checking your credit history, if applicable, for purposes of providing you with information you requested through the Website.
          </p>
          <p className="mt-3">
            If you do not want to receive such emails, telephone calls, or text messages, you may opt out (i) during the registration process, or (ii) by emailing the address at the bottom of the emails with &ldquo;UNSUBSCRIBE&rdquo; or by texting &ldquo;STOP&rdquo; or &ldquo;OPT-OUT&rdquo; as specifically set forth in the communication. For more information, please see our{" "}
            <Link href="/privacy-policy" className="text-violet-600 underline hover:text-violet-800">Privacy Policy</Link>.
          </p>
        </Section>

        <Section title="You Are Responsible for Your Financial Decisions">
          <p>
            We do not endorse or recommend the products or services of any Service Provider, and we are not an agent or advisor to you or any Service Provider. It is your responsibility to investigate Service Providers. You acknowledge and agree that Service Providers are solely responsible for any services that they may provide to you and that we are not liable for any losses, costs, damages or claims in connection with, arising from, or related to, your use of a Service Provider&apos;s products or services. We urge you to obtain the advice of financial advisors, insurance agents, brokers or other qualified professionals who are fully aware of your individual circumstances before you make any financial or insurance decisions. For questions regarding your insurance policy, please contact your broker or insurance company directly. Residents of some states may not be eligible for insurance or may be subject to large premiums.
          </p>
        </Section>

        <Section title="No Representation Regarding Third Party Content">
          <p>
            We make no representations or endorsements regarding the quality, safety, truth, accuracy, reliability, completeness, condition or usefulness of any third-party content posted on the Website, hyperlinks to third-party websites outside of the Website, or any content posted on third-party websites. We are not liable for the terms and consequences of any commercial transaction concluded as a result of any advertisement placed on or available through the Website. The amount of compensation provided, along with other factors, may impact which policy or offer you are presented. The offer you receive may be coming from the company that bid the most for your information. This Website does not always provide you with an offer with the best rates or terms. Our Website does not include all companies or all available offers. We encourage you to research all available insurance policy options relative to your situation.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            You agree that we own all right, title and interest, including all intellectual property rights &ndash; under federal, state, and international intellectual property law, including but not limited to patent law, copyright law, trade secret law, trademark law, unfair competition law, and any and all other proprietary rights, and any and all applications, renewals, extensions and restorations thereof, now or hereafter in force and effect worldwide &ndash; in and to the Website and the Services. If you submit comments, suggestions, ratings, or other feedback regarding the Website or your experience (&ldquo;Feedback&rdquo;), you agree that you grant to us a perpetual, irrevocable, royalty-free, worldwide, royalty-free, sub-licensable and transferable license to copy, publish, translate, modify, reformat, create derivative works from, distribute, reproduce, and sublicense such materials or any parts of such materials, and that such Feedback does not violate any law or the rights of any third party. We shall be free to use such Feedback for any purpose and without restriction, compensation, attribution, or obligation to you. You acknowledge and agree that our name and logo are our trademarks. You are not authorized to use any such trademarks, or any other of our trademarks, whether registered or unregistered, without our prior written permission. Ownership of all such trademarks and the goodwill associated therewith remains with us. All other trademarks and copyrights are the property of their respective owners.
          </p>
          <p className="mt-3">
            Without limiting the foregoing, you acknowledge and agree that rights in any third-party content (including any third party content licensed by us, advertisements, etc.) presented to you through the Service or contained on the Website or in any other websites to which this Website links, including copyright, trademarks, logos, service marks, patents or other proprietary rights and any other intellectual property rights not owned by us, belong to their respective owners. We make no proprietary claim to any third-party names, trademarks or service marks appearing on our Services.
          </p>
        </Section>

        <Section title="Copyright Infringement">
          <p>
            If you believe that any materials made accessible on the Website have been used or copied in a way that infringes your copyright or other intellectual property rights, you may request that we remove those materials by providing us with the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;</li>
            <li>A description of the copyrighted work or other intellectual property that you claim has been infringed;</li>
            <li>A description of where the material that you claim is infringing is located on the website (including the specific URL of each item in dispute, which should help us to locate the relevant content);</li>
            <li>Your address, telephone number, and email address;</li>
            <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and</li>
            <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright or intellectual property owner or are authorized to act on the copyright or intellectual property owner&apos;s behalf.</li>
          </ul>
          <p className="mt-3">
            <strong>Designated Agent.</strong> Notice of claims of copyright or other intellectual property infringement can be delivered as follows, by email:{" "}
            <a href="mailto:support@tryautoquote.com" className="text-violet-600 underline">support@tryautoquote.com</a>
          </p>
        </Section>

        <Section title="Disclaimer of Warranties; Limitation of Liabilities">
          <p className="font-semibold">
            THE SERVICES, THE WEBSITE AND ITS CONTENT ARE PROVIDED TO YOU STRICTLY ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND THAT EXTEND BEYOND THE DESCRIPTION ON THE FACE OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY OR NON-INFRINGEMENT OF THIRD PARTY RIGHTS, ARE HEREBY DISCLAIMED TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
          </p>
          <p className="mt-3">
            We shall have no liability for any scheduled or unplanned system outages, including due to any third party acts or any other outages of web host providers or the Internet infrastructure and network external to the Website and the Service, and in particular for the resulting unavailability of the Website, any resultant loss of data or any resultant delay or non-delivery of information.
          </p>
          <p className="mt-3 font-semibold">
            TO THE FULLEST EXTENT PERMISSIBLE BY LAW, WE SHALL NOT BE RESPONSIBLE TO, OR LIABLE TO, YOU, OR ANY THIRD PARTY, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, FOR ANY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR ANY LOSS OF PROFIT, REVENUE OR BUSINESS, AS A DIRECT OR INDIRECT RESULT OF: (I) YOUR BREACH OR VIOLATION OF THIS AGREEMENT; (II) YOUR ACCESS AND USE OF THE WEBSITE AND SERVICES; (III) YOUR DELAY IN ACCESSING OR INABILITY TO ACCESS OR USE OUR SERVICES FOR ANY REASON; (IV) YOUR DOWNLOADING OF ANY OF THE CONTENT OR THE COLLECTIVE WORK FOR YOUR USE; OR (V) THE ACTIONS OR INACTION OF SERVICE PROVIDERS. WITHOUT LIMITING THE FOREGOING, OUR AGGREGATE LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID TO US BY YOU FOR USE OF THE WEBSITE. Notwithstanding anything to the contrary herein, this Disclaimer of Warranties and Limitation of Liability do not apply in New Jersey.
          </p>
        </Section>

        <Section title="Dispute Resolution by Binding Mandatory Arbitration and Class Action Waiver">
          <p>
            Any dispute relating in any way to your visit to, or use of the Website, the Content, the Services, any other products or services offered through the Website, any telephone calls, emails, or text messages that you receive from us or from Service Providers, or otherwise related to this Agreement (&ldquo;Disputes&rdquo;), shall be resolved exclusively through confidential arbitration, rather than in court, and shall be governed exclusively by the laws of the State of New York, without regard to principles of conflict of laws. The Federal Arbitration Act governs the interpretation and enforcement of this Arbitration Agreement. Further, any question as to the validity of this Arbitration Agreement shall be submitted to confidential arbitration and decided by an arbitrator. For the avoidance of doubt, all claims arising under the Telephone Consumer Protection Act and state telemarketing and email marketing laws shall be considered &ldquo;Disputes&rdquo; that are subject to resolution by binding individual, confidential arbitration.
          </p>
          <p className="mt-3">
            If a Dispute arises under this Agreement, you agree to first contact us at{" "}
            <a href="mailto:support@tryautoquote.com" className="text-violet-600 underline">support@tryautoquote.com</a>. Before formally submitting a Dispute to arbitration, you and we may choose to informally resolve the Dispute. If any Dispute cannot be resolved informally, you agree that any and all Disputes, including the validity and applicability of this arbitration clause and class action waiver, shall be submitted to final and binding arbitration before a single arbitrator of the American Arbitration Association (&ldquo;AAA&rdquo;) in a location convenient to you or telephonically. Either you or we may commence the arbitration process by submitting a written demand for arbitration with the AAA, and providing a copy to the other party. We will pay all of the filing costs. The arbitration will be conducted in accordance with the provisions of the AAA&apos;s Commercial Dispute Resolutions Procedures, Supplementary Procedures for Consumer-Related Disputes, in effect at the time of submission of the demand for arbitration. The AAA&apos;s rules are available at www.adr.org. A form for initiating arbitration proceedings is available on the AAA&apos;s site at http://www.adr.org. Except as may be required by law as determined by the arbitrator, no party or arbitrator may disclose the existence, content or results of any arbitration hereunder without the prior written consent of both parties. Without limiting the foregoing, YOU EXPRESSLY AGREE TO SUBMIT TO ARBITRATION ALL DISPUTES RELATING TO ANY TEXT MESSAGES OR TELEPHONE CALLS YOU RECEIVE FROM OR ON BEHALF OF US OR ANY ENTITY WITH WHOM WE MAY SHARE YOUR TELEPHONE NUMBER (INCLUDING SERVICE PROVIDERS). Further, we both agree that all entities with whom we share your telephone numbers, including Service Providers, shall be third party beneficiaries of this Dispute Resolution by Binding Arbitration and Class Action Waiver, and that those entities have the same rights as Company to enforce this arbitration provision.
          </p>
          <p className="mt-3">
            Notwithstanding the foregoing, the following shall not be subject to arbitration and may be adjudicated only in the state and federal courts of New York: (i) any dispute, controversy, or claim relating to or contesting the validity of our or one of our family company&apos;s intellectual property rights and proprietary rights, including without limitation, patents, trademarks, service marks, copyrights, or trade secrets; (ii) an action by us for temporary or preliminary injunctive relief, whether prohibitive or mandatory, or other provisional relief; (iii) any legal action by us against a non-consumer; and (iv) interactions with governmental and regulatory authorities. You expressly agree to refrain from bringing or joining any claims in any representative or class-wide capacity, including but not limited to bringing or joining any claims in any class action or any class-wide arbitration. Both parties also have the right to bring qualifying claims in small claims court.
          </p>
          <p className="mt-3">
            The arbitrator&apos;s award shall be binding and may be entered as a judgment in any court of competent jurisdiction. The arbitrator can provide the same rights and remedies that you can obtain in court, including public injunctive relief. To the fullest extent permitted by applicable law, no arbitration under this Agreement may be joined to an arbitration involving any other party subject to this Agreement, whether through a class action, private attorney general proceeding, class arbitration proceedings or otherwise. If an arbitrator or court decides that any part of this arbitration agreement is invalid or unenforceable, the other parts of this arbitration agreement shall still apply; however, if an arbitrator or court decides that the class action waiver is invalid or unenforceable, then the entirety of this arbitration agreement shall be null and void.
          </p>
          <p className="mt-3 font-semibold">
            YOU UNDERSTAND THAT YOU WOULD HAVE HAD A RIGHT TO LITIGATE IN A COURT, TO HAVE A JUDGE OR JURY DECIDE YOUR CASE AND TO BE PARTY TO A CLASS OR REPRESENTATIVE ACTION. THE RIGHTS THAT YOU WOULD HAVE IF YOU WENT TO COURT, SUCH AS DISCOVERY OR THE RIGHT TO APPEAL, MAY BE MORE LIMITED OR MAY NOT EXIST. HOWEVER, YOU UNDERSTAND AND AGREE TO HAVE ANY CLAIMS DECIDED INDIVIDUALLY AND ONLY THROUGH ARBITRATION. YOU FURTHER AGREE THAT THE ARBITRATOR MAY NOT CONSOLIDATE PROCEEDINGS OR CLAIMS OR OTHERWISE PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING.
          </p>
          <p className="mt-3 font-semibold">
            30 DAY RIGHT TO OPT-OUT. YOU SHALL HAVE THIRTY (30) DAYS FROM THE EARLIEST OF THE DATE THAT YOU VISIT THE WEBSITE OR THE DATE YOU SUBMIT INFORMATION THROUGH THE WEBSITE TO OPT OUT OF THIS ARBITRATION AGREEMENT AND CLASS ACTION WAIVER, BY CONTACTING US BY EMAIL AT{" "}
            <a href="mailto:support@tryautoquote.com" className="text-violet-600 underline font-semibold">SUPPORT@TRYAUTOQUOTE.COM</a>. IF YOU DO NOT OPT OUT BY THE EARLIEST OF THE DATE THAT YOU VISIT THE WEBSITE, OR THE DATE YOU SUBMIT INFORMATION TO US THROUGH THE WEBSITE, THEN YOU ARE NOT ELIGIBLE TO OPT OUT OF THIS ARBITRATION AGREEMENT AND YOU SHALL BE BOUND TO ARBITRATE DISPUTES IN ACCORDANCE WITH THOSE SECTIONS. IF YOU OPT-OUT OF THESE ARBITRATION PROVISIONS, WE ALSO WILL NOT BE BOUND BY THEM.
          </p>
        </Section>

        <Section title="Electronic Communications">
          <p>
            When you visit or submit information on the Website or send email to us, you are communicating with us electronically. You consent to receive communications from us electronically. Although we may choose to communicate with you by postal mail, we may also choose to communicate with you by email or by posting notices on the Website. In addition, you acknowledge and agree that by clicking on the button labeled &ldquo;SUBMIT&rdquo;, &ldquo;I AGREE&rdquo;, &ldquo;I ACCEPT&rdquo;, &ldquo;GET QUOTES&rdquo;, ANY LINK THROUGH WHICH YOU SUBMIT CONTACT INFORMATION, or such similar links as may be designated by us to accept these terms and conditions of this Agreement, you are submitting a legally binding electronic signature and entering into a legally binding contract. You acknowledge that your electronic submissions constitute your agreement and intent to be bound by these Terms of Use. Pursuant to any applicable statutes, regulations, rules, ordinances or other laws, including without limitation the United States Electronic Signatures in Global and National Commerce Act, P.L. 106-229 (the &ldquo;E-Sign Act&rdquo;) or other similar statutes, YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS AND OTHER RECORDS AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED THROUGH THE WEBSITE OR SERVICES OFFERED BY COMPANY. Further, you hereby waive any rights or requirements under any statutes, regulations, rules, ordinances or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records.
          </p>
        </Section>

        <Section title="Miscellaneous">
          <p>
            These Terms of Use and any documents expressly incorporated by reference, including the Privacy Policy, constitute the entire agreement between you and us with respect to the subject matter hereof, and, unless otherwise specifically stated in writing, there are no other terms, conditions, or obligations between the parties relating to the use of the Website or the Service, other than those contained in these Terms. No agency, partnership, joint venture, employer-employee or franchiser-franchisee relationship is intended or created by these Terms between you and us. The section headings used herein are for convenience only and shall not be given any legal import. Any waiver of any provision of these Terms will be effective only if made in writing and signed by us. Any protection of intellectual property rights, any of your representations and warranties and any limitations on liability explicitly set forth herein, shall remain in full force and effect notwithstanding any termination of your use of the Service. If any provision of these Terms is found by an arbitrator or court of competent jurisdiction (if applicable) to be invalid or unenforceable, any other provisions of these Terms will continue in full force and effect and you agree that the court should endeavor to give maximum effect to the parties&apos; intentions as reflected in the provision. We shall be permitted to send notices to you by posting a notice on the Website (deemed received on your accessing the Website or using the Service) or via e-mail to the address that you provided (deemed received on the following day).
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
