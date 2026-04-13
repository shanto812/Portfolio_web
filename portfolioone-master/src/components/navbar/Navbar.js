import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <header className="sticky top-4 z-50 mx-auto px-4">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex cursor-pointer items-center gap-2"
          >
            <img src={logo} alt="logo" className="h-11 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden mdl:flex items-center gap-2 lg:gap-3">
            {navLinksdata.map(({ _id, title, link }) => (
              <Link
                key={_id}
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active"
                className="group relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium tracking-wide text-gray-300 transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">{title}</span>
                <span className="absolute inset-x-3 bottom-1 h-px scale-x-0 bg-gradient-to-r from-transparent via-designColor to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden mdl:inline-flex items-center gap-2 rounded-full border border-designColor/40 bg-designColor/10 px-5 py-2.5 text-sm font-semibold text-designColor transition-all duration-300 hover:-translate-y-0.5 hover:bg-designColor/20"
            >
              Let&apos;s Talk
              <FiArrowUpRight className="text-base" />
            </a>

            <button
              onClick={() => setShowMenu(!showMenu)}
              className="mdl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-designColor transition-all duration-300 hover:scale-105 hover:bg-white/10"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          showMenu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setShowMenu(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed left-0 top-0 z-[60] h-full w-[85%] max-w-sm border-r border-white/10 bg-[#0b0f19]/95 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between">
          <div>
            <img className="w-28" src={logo} alt="logo" />
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Building clean, modern and memorable web experiences.
            </p>
          </div>

          <button
            onClick={() => setShowMenu(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-2xl text-gray-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <MdClose />
          </button>
        </div>

        <nav className="mt-10">
          <ul className="flex flex-col gap-2">
            {navLinksdata.map((item) => (
              <li key={item._id}>
                <Link
                  onClick={() => setShowMenu(false)}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active"
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-4 text-base font-medium text-gray-300 transition-all duration-300 hover:border-designColor/30 hover:bg-designColor/10 hover:text-white"
                >
                  <span>{item.title}</span>
                  <span className="text-designColor">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 border-t border-white/10 pt-6">
          <h2 className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-400">
            Find me in
          </h2>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <span
                key={i}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-designColor/40 hover:bg-designColor/15 hover:text-designColor"
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;