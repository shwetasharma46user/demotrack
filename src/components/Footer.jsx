import React from "react";

function Footer() {
  return (
    <footer className="text-left">
      <div className="px-3 py-5 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-5 py-3 md:grid-cols-4">
          <div className="text-sm text-gray-500">
            <h4 className="pb-5 mb-4 text-4xl font-bold text-gray-800" style={{ fontFamily: "'Raleway', sans-serif" }}>PeersTrack
            </h4>
            <p className="mb-4">XYZ, location, India 852001</p>
            <div className="pb-3">
              <strong className="">Email:</strong>
              <a href="mailto:xyz@example.com">xyzemail@example.com</a>
            </div>
            <div>
              <strong className="">Phone:</strong>
              <a href="tel:+91-731-1212112">+91-731-1212112</a>
            </div>
          </div>
          <div className="">
            <h4 className="pb-4 text-xl font-bold text-gray-800">Useful Links</h4>
            <ul className="text-sm ">
              <li className="py-2">
                <a href="#" className="">Home</a>
              </li>
              <li className="py-2">
                <a href="#" className="">About Us</a>
              </li>
              <li className="py-2">
                <a href="#" className="">Service</a>
              </li>
              <li className="py-2">
                <a href="#" className="">Terms of service</a>
              </li>
              <li className="py-2">
                <a href="#" className="">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="pb-4 text-xl font-bold text-gray-800">Our Services</h4>
            <ul className="text-sm ">
              <li className="py-2">
                <a href="#" className="">Web Design</a>
              </li>
              <li className="py-2">
                <a href="#" className="">Website Development</a>
              </li>
              <li className="py-2">
                <a href="#" className="">Software Development</a>
              </li>
              <li className="py-2">
                <a href="#" className="">Graphic Design</a>
              </li>
              <li className="py-2">
                <a href="#" className="">Product Management</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="pb-4 text-xl font-bold text-gray-800">Join Our Newsletter</h4>
            <p className="text-sm">Keep up with the latest tech trends. Getting the latest tips and tricks delivered straight
              to your inbox twice a week is easy when you sign up for our newsletter.</p>
          </div>
        </div>
      </div>
      <div className="p-4 text-center text-white bg-gray-600">
        <p> © BestTrack. All Right Reserved 2023.
        </p>
      </div>
    </footer>
  )
}

export default Footer;