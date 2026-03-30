import { Link, NavLink } from "react-router-dom";
import BrandMark from "./BrandMark";

const navLinkBase =
  "text-[15px] font-medium text-brand-text/80 hover:text-brand-text transition duration-300";

const Navbar = () => {
  return (
    <nav className="bg-brand-white/90 backdrop-blur border-b border-brand-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <BrandMark size={44} />
          <span className="text-[18px] md:text-[30px] font-extrabold tracking-tight text-brand-text">
            HairCare 
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10  ">
          <NavLink to="/" className={navLinkBase}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkBase}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkBase}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
  <Link
    to="/#consultation"
    className="relative inline-flex items-center justify-center rounded-xl 
    bg-gradient-to-r from-[#00A67E] to-[#00C896] 
    text-white px-5 py-2.5 text-sm font-semibold 
    shadow-[0_8px_20px_rgba(0,166,126,0.25)] 
    hover:shadow-[0_10px_25px_rgba(0,166,126,0.35)] 
    hover:scale-[1.04] active:scale-[0.97] 
    transition-all duration-300 ease-out"
  >
    Start Consultation
  </Link>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
