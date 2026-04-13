import Link from "next/link"
import { Phone, MapPin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer>

      {/* TOP FOOTER */}
      <div className="bg-[#042C53] text-white py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-5 gap-12">

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-6">Company Info</h4>
            <ul className="space-y-3 text-[#B5D4F4]">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-[#B5D4F4]">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-white transition">
                  Terms of Use
                </Link>
              </li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-6">Features</h4>
            <ul className="space-y-3 text-[#B5D4F4]">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-[#B5D4F4]">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Column 5 — Contact */}
          <div>
            <h4 className="font-semibold mb-6">Get In Touch</h4>

            <div className="space-y-4 text-[#B5D4F4]">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>(480) 555-0103</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>457 Washington Ave</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>debra.holt@example.com</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            Disclaimer: The operator of this website is not an insurance broker or an insurance company, is not a representative or an agent to any broker or insurance company, does not endorse any particular broker or insurance provider and does not make any insurance decisions. We will submit the information you provide to a broker and/or an insurance company. This website does not constitute an offer or solicitation for insurance. Providing your information on this Site does not guarantee that you will be approved for insurance. Not all insurance providers can or will insure your property. The quotes, rates or savings advertised by/on this website are not necessarily available from all providers or advertisers. Results of using the service may vary according to individual information provided and your actual quotes, rates or savings will vary based on many different factors and the policy premium for any policy is determined by the insurance provider itself following application. For questions regarding your insurance policy, please contact your broker or insurance company directly. Residents of some states may not be eligible for insurance or may be subject to large premiums. You are under no obligation to use our website or service to initiate contact, nor apply for insurance or any product with any broker or insurance company. We receive compensation, in the form of referral fees, from the insurance carriers, aggregators, or other offers that we direct you to. Therefore, the amount of compensation provided, along with other factors, may impact which policy / offer you are presented. The offer you receive may be coming from the company that bid the most for your information. This website does not always provide you with an offer with the best rates or terms. Our website does not include all companies or all available offers. We encourage you to research all available insurance policy options relative to your situation. All trademarks and copyrights are the property of their respective owners.
          </p>
          <p className="text-xs text-gray-500 mt-3">
            * Results of using the service may vary according to individual information provided. Avg. monthly expenditure for auto insurance is $89 (based on the NAIC 2020 / 2021 Auto Insurance Database Report).
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-center">
          <p className="text-sm text-gray-600 text-center">
            Made With Love By Luminarix All Right Reserved
          </p>
        </div>
      </div>

    </footer>
  )
}
