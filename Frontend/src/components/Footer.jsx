const Footer = () => {
  return (
    <footer className="bg-brand-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2">
              <span className="shrink-0">
                {/*
                  Keep footer self-contained (no extra imports) by inlining a tiny mark.
                  Navbar uses `BrandMark` for the same look.
                */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="rounded-xl bg-brand-green/10"
                  role="img"
                  aria-label="HairCare Clinic"
                >
                  <defs>
                    <linearGradient id="hc_mark_footer" x1="6" y1="6" x2="34" y2="34">
                      <stop offset="0" stopColor="#00A67E" />
                      <stop offset="1" stopColor="#3A86FF" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(8,8)">
                    <path
                      d="M12 0.5 L23.5 12 L12 23.5 L0.5 12 Z"
                      fill="none"
                      stroke="url(#hc_mark_footer)"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.4 12.2 C 6.2 8.8, 12.2 8.2, 14.2 11.1 C 15.2 12.6, 14.6 14.3, 13.3 15.3 C 11.4 16.7, 8.2 16.4, 6.5 15.2"
                      fill="none"
                      stroke="url(#hc_mark_footer)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </span>
              <div>
                <div className="text-base font-extrabold tracking-tight text-brand-text">
                  HairCare Clinic
                </div>
                <div className="text-sm text-brand-muted">
                  Science-led, personalized care for hair health.
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-sm text-brand-muted">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-green/60" />
                <span>Support: </span>
                <a
                  href="mailto:customercare@haircareclinic.com"
                  className="text-brand-blue hover:underline underline-offset-4"
                >
                  Terna@haircare.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-green/60" />
                <span>Call/WhatsApp: </span>
                <a
                  href="tel:+918828006272"
                  className="text-brand-blue hover:underline underline-offset-4"
                >
                  +91 88280 06272
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-8 sm:grid-cols-3">
             
              <div>
                <div className="text-sm font-semibold text-brand-text">Company</div>
                <ul className="mt-4 space-y-3 text-sm text-brand-muted">
                  <li>
                    <a href="/about" className="hover:text-brand-text transition duration-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-brand-text transition duration-300">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/#consultation" className="hover:text-brand-text transition duration-300">
                      Start consultation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold text-brand-text">Legal</div>
                <ul className="mt-4 space-y-3 text-sm text-brand-muted">
                  <li>
                    <a href="#" className="hover:text-brand-text transition duration-300">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-text transition duration-300">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-brand-text transition duration-300">
                      Refunds
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-brand-muted">
            © {new Date().getFullYear()} HairCare Clinic. All rights reserved.
          </div>
          <div className="text-sm text-brand-muted">
            Registered Office: Terna Engineering College, Maharashtra, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
