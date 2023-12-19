import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="headerfix fixed top-0 w-full py-3 z-50 bg-black/70">
      <div className="flex items-center justify-between gap-3 px-3">
        <div className="block">
          <Link to="/" className="text-white">
            <span className="text-2xl font-bold">PeersTrack</span> 
          </Link>
        </div>
        <nav id="navbar" className="flex items-center">
          <div id="nav-click" className="block sm:hidden z-50 cursor-pointer">
            <i className="fa-solid fa-bars text-white text-2xl"></i>
          </div>
          <ul id="nav-show" className="pt-12 sm:pt-0 px-4 sm:px-0 sm:flex items-center toggle-out">
            <li className="px-0 sm:px-2 py-3 sm:py-0 border-b border-white/10 sm:border-0 last:border-0">
              <Link to="/banner" className="relative px-0 sm:px-3 py-2 duration-[0.3s] font-normal text-sm text-white before:content-[''] before:bg-white/70 before:h-0.5 before:w-full before:transition-[all_0.3s_ease-in-out_0s] before:invisible before:absolute before:block before:bottom-0 before:scale-x-0 hover:before:scale-x-100 hover:before:visible">Home</Link>
            </li>
            <li className="px-0 sm:px-2 py-3 sm:py-0 border-b border-white/10 sm:border-0 last:border-0">
              <Link to="/about" className="relative px-0 sm:px-3 py-2 duration-[0.3s] font-normal text-sm text-white before:content-[''] before:bg-white/70 before:h-0.5 before:w-full before:transition-[all_0.3s_ease-in-out_0s] before:invisible before:absolute before:block before:bottom-0 before:scale-x-0 hover:before:scale-x-100 hover:before:visible">About</Link>
            </li>
            <li className="px-0 sm:px-2 py-3 sm:py-0 border-b border-white/10 sm:border-0 last:border-0">
              <Link to="/service" className="relative px-0 sm:px-3 py-2 duration-[0.3s] font-normal text-sm text-white before:content-[''] before:bg-white/70 before:h-0.5 before:w-full before:transition-[all_0.3s_ease-in-out_0s] before:invisible before:absolute before:block before:bottom-0 before:scale-x-0 hover:before:scale-x-100 hover:before:visible">Services</Link>
            </li>
            <li className="px-0 sm:px-2 py-3 sm:py-0 border-b border-white/10 sm:border-0 last:border-0">
              <Link to="/portfolio" className="relative px-0 sm:px-3 py-2 duration-[0.3s] font-normal text-sm text-white before:content-[''] before:bg-white/70 before:h-0.5 before:w-full before:transition-[all_0.3s_ease-in-out_0s] before:invisible before:absolute before:block before:bottom-0 before:scale-x-0 hover:before:scale-x-100 hover:before:visible">Portfolio</Link>
            </li>
            <li className="px-0 sm:px-2 py-3 sm:py-0 border-b border-white/10 sm:border-0 last:border-0">
              <Link to="/career" className="relative px-0 sm:px-3 py-2 duration-[0.3s] font-normal text-sm text-white before:content-[''] before:bg-white/70 before:h-0.5 before:w-full before:transition-[all_0.3s_ease-in-out_0s] before:invisible before:absolute before:block before:bottom-0 before:scale-x-0 hover:before:scale-x-100 hover:before:visible">Career</Link>
            </li>
            <li className="px-0 sm:px-2 py-3 sm:py-0 border-b border-white/10 sm:border-0 last:border-0">
              <Link to="/blog" className="relative px-0 sm:px-3 py-2 duration-[0.3s] font-normal text-sm text-white before:content-[''] before:bg-white/70 before:h-0.5 before:w-full before:transition-[all_0.3s_ease-in-out_0s] before:invisible before:absolute before:block before:bottom-0 before:scale-x-0 hover:before:scale-x-100 hover:before:visible">Blog</Link>
            </li>
            <li className="px-0 sm:px-2 py-3 sm:py-0 border-b border-white/10 sm:border-0 last:border-0">
              <Link to="/contact" className="relative px-0 sm:px-3 py-2 duration-[0.3s] font-normal text-sm text-white before:content-[''] before:bg-white/70 before:h-0.5 before:w-full before:transition-[all_0.3s_ease-in-out_0s] before:invisible before:absolute before:block before:bottom-0 before:scale-x-0 hover:before:scale-x-100 hover:before:visible">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;