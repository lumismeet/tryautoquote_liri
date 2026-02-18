import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer>

      {/* TOP FOOTER */}
      <div className="bg-[#4C1D95] text-white py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-5 gap-12">

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-6">Company Info</h4>
            <ul className="space-y-3 text-violet-200">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-violet-200">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-6">Features</h4>
            <ul className="space-y-3 text-violet-200">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-violet-200">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Column 5 — Contact */}
          <div>
            <h4 className="font-semibold mb-6">Get In Touch</h4>

            <div className="space-y-4 text-violet-200">

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

      {/* BOTTOM BAR */}
      <div className="bg-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-600 text-center md:text-left">
            Made With Love By Luminarix All Right Reserved
          </p>

          <div className="flex gap-5 text-violet-500">
            <Facebook size={18} />
            <Instagram size={18} />
            <Twitter size={18} />
          </div>

        </div>
      </div>

    </footer>
  )
}
