import React from "react";

function Footer() {
  return (
    <footer class="text-left">
      <div class="max-w-7xl mx-auto px-3 py-5">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5 py-3">
          <div class="text-sm text-gray-500">
            <h4 class="text-4xl text-gray-800 font-bold mb-4 pb-5" style={{ fontFamily: "'Raleway', sans-serif" }}>PeersTrack
            </h4>
            <p class="mb-4">XYZ, location, India 852001</p>
            <div class="pb-3">
              <strong class="">Email:</strong>
              <a href="mailto:xyz@example.com">xyzemail@example.com</a>
            </div>
            <div>
              <strong class="">Phone:</strong>
              <a href="tel:+91-731-1212112">+91-731-1212112</a>
            </div>
          </div>
          <div class="">
            <h4 class="text-xl text-gray-800 font-bold pb-4">Useful Links</h4>
            <ul class="text-sm ">
              <li class="py-2">
                <a href="#" class="">Home</a>
              </li>
              <li class="py-2">
                <a href="#" class="">About Us</a>
              </li>
              <li class="py-2">
                <a href="#" class="">Service</a>
              </li>
              <li class="py-2">
                <a href="#" class="">Terms of service</a>
              </li>
              <li class="py-2">
                <a href="#" class="">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div class="">
            <h4 class="text-xl text-gray-800 font-bold pb-4">Our Services</h4>
            <ul class="text-sm ">
              <li class="py-2">
                <a href="#" class="">Web Design</a>
              </li>
              <li class="py-2">
                <a href="#" class="">Website Development</a>
              </li>
              <li class="py-2">
                <a href="#" class="">Software Development</a>
              </li>
              <li class="py-2">
                <a href="#" class="">Graphic Design</a>
              </li>
              <li class="py-2">
                <a href="#" class="">Product Management</a>
              </li>
            </ul>
          </div>
          <div class="">
            <h4 class="text-xl text-gray-800 font-bold pb-4">Join Our Newsletter</h4>
            <p class="text-sm">Keep up with the latest tech trends. Getting the latest tips and tricks delivered straight
              to your inbox twice a week is easy when you sign up for our newsletter.</p>
          </div>
        </div>
      </div>
      <div class="bg-gray-600 text-white text-center p-4">
        <p> © BestTrack. All Right Reserved 2023.
        </p>
      </div>
    </footer>
  )
}

export default Footer;