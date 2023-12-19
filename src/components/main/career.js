import React from "react";
import aboutIcon from "../../assets/img/about.jpg"
import Header from "../header";

const Career = (props) => {
  const {titleCareer} = props;
  return (
    <>
      <Header />
      <section id="career" class="py-14 bg-gray-200">
        <div class="max-w-7xl mx-auto px-3">
          <div class="text-left pb-5">
            <h5
              class="inline-block text-gray-500 text-sm font-medium font-sans tracking-widest py-1 uppercase after:content-[''] after:inline-block after:h-px after:w-32 after:bg-gray-700 after:my-1 after:mx-2">
              {titleCareer.careerTitle}
            </h5>
            <h3 class="text-2xl md:text-3xl font-extrabold uppercase text-black"
              style={{ fontFamily: "'Raleway', sans-serif" }}>
                {titleCareer.careerSubTitle}
            </h3>
          </div>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
            <div class="group rounded bg-white text-gray-500 text-base text-left h-full shadow-lg p-3 lg:p-5 mb-5">
              <div class="flex items-center justify-between gap-3 mb-4">
                <div class="flex items-center gap-4">
                  <div class="h-12 w-12 rounded-lg bg-gray-100">
                    <img src={aboutIcon} class="h-full w-full rounded" />
                  </div>
                  <div class="block">
                    <h6 class="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i class="fa-solid fa-location mr-1"></i> Indore</span>
                  </div>
                </div>
                <i class="fa-solid fa-bolt cursor-pointer"></i>
              </div>
              <div class="flex flex-col item-baseline gap-2">
                <h3 class="text-xl text-gray-600 font-bold group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span><i class="fa-solid fa-briefcase mr-1"></i> Full Time</span>
                  <span><i class="fa-solid fa-clock mr-1"></i> Posted 1 year ago</span>
                </div>
                <p class="font-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div class="flex items-center gap-2 text-sm font-medium py-2">
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Adobe XD</span>
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Figma</span>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <a href="#"
                    class="uppercase text-base font-bold py-2 px-3 rounded text-white tracking-wide bg-gray-600 hover:bg-gray-800 ">Apply
                    Now</a>
                </div>
              </div>
            </div>
            <div class="group rounded bg-white text-gray-500 text-base text-left h-full shadow-lg p-3 lg:p-5 mb-5">
              <div class="flex items-center justify-between gap-3 mb-4">
                <div class="flex items-center gap-4">
                  <div class="h-12 w-12 rounded-lg bg-gray-100">
                    <img src={aboutIcon} class="h-full w-full rounded" />
                  </div>
                  <div class="block">
                    <h6 class="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i class="fa-solid fa-location mr-1"></i> Indore</span>
                  </div>
                </div>
                <i class="fa-solid fa-bolt cursor-pointer"></i>
              </div>
              <div class="flex flex-col item-baseline gap-2">
                <h3 class="text-xl text-gray-600 font-bold group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span><i class="fa-solid fa-briefcase mr-1"></i> Full Time</span>
                  <span><i class="fa-solid fa-clock mr-1"></i> Posted 1 year ago</span>
                </div>
                <p class="font-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div class="flex items-center gap-2 text-sm font-medium py-2">
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Adobe XD</span>
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Figma</span>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <a href="#"
                    class="uppercase text-base font-bold py-2 px-3 rounded text-white tracking-wide bg-gray-600 hover:bg-gray-800 ">Apply
                    Now</a>
                </div>
              </div>
            </div>
            <div class="group rounded bg-white text-gray-500 text-base text-left h-full shadow-lg p-3 lg:p-5 mb-5">
              <div class="flex items-center justify-between gap-3 mb-4">
                <div class="flex items-center gap-4">
                  <div class="h-12 w-12 rounded-lg bg-gray-100">
                    <img src={aboutIcon} class="h-full w-full rounded" />
                  </div>
                  <div class="block">
                    <h6 class="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i class="fa-solid fa-location mr-1"></i> Indore</span>
                  </div>
                </div>
                <i class="fa-solid fa-bolt cursor-pointer"></i>
              </div>
              <div class="flex flex-col item-baseline gap-2">
                <h3 class="text-xl text-gray-600 font-bold group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span><i class="fa-solid fa-briefcase mr-1"></i> Full Time</span>
                  <span><i class="fa-solid fa-clock mr-1"></i> Posted 1 year ago</span>
                </div>
                <p class="font-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div class="flex items-center gap-2 text-sm font-medium py-2">
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Adobe XD</span>
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Figma</span>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <a href="#"
                    class="uppercase text-base font-bold py-2 px-3 rounded text-white tracking-wide bg-gray-600 hover:bg-gray-800 ">Apply
                    Now</a>
                </div>
              </div>
            </div>
            <div class="group rounded bg-white text-gray-500 text-base text-left h-full shadow-lg p-3 lg:p-5 mb-5">
              <div class="flex items-center justify-between gap-3 mb-4">
                <div class="flex items-center gap-4">
                  <div class="h-12 w-12 rounded-lg bg-gray-100">
                    <img src={aboutIcon} class="h-full w-full rounded" />
                  </div>
                  <div class="block">
                    <h6 class="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i class="fa-solid fa-location mr-1"></i> Indore</span>
                  </div>
                </div>
                <i class="fa-solid fa-bolt cursor-pointer"></i>
              </div>
              <div class="flex flex-col item-baseline gap-2">
                <h3 class="text-xl text-gray-600 font-bold group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span><i class="fa-solid fa-briefcase mr-1"></i> Full Time</span>
                  <span><i class="fa-solid fa-clock mr-1"></i> Posted 1 year ago</span>
                </div>
                <p class="font-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div class="flex items-center gap-2 text-sm font-medium py-2">
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Adobe XD</span>
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Figma</span>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <a href="#"
                    class="uppercase text-base font-bold py-2 px-3 rounded text-white tracking-wide bg-gray-600 hover:bg-gray-800 ">Apply
                    Now</a>
                </div>
              </div>
            </div>
            <div class="group rounded bg-white text-gray-500 text-base text-left h-full shadow-lg p-3 lg:p-5 mb-5">
              <div class="flex items-center justify-between gap-3 mb-4">
                <div class="flex items-center gap-4">
                  <div class="h-12 w-12 rounded-lg bg-gray-100">
                    <img src={aboutIcon} class="h-full w-full rounded" />
                  </div>
                  <div class="block">
                    <h6 class="text-xl font-bold text-gray-600">Freelancer</h6>
                    <span><i class="fa-solid fa-location mr-1"></i> Indore</span>
                  </div>
                </div>
                <i class="fa-solid fa-bolt cursor-pointer"></i>
              </div>
              <div class="flex flex-col item-baseline gap-2">
                <h3 class="text-xl text-gray-600 font-bold group-hover:underline"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  UI/UX Designer Full time
                </h3>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                  <span><i class="fa-solid fa-briefcase mr-1"></i> Full Time</span>
                  <span><i class="fa-solid fa-clock mr-1"></i> Posted 1 year ago</span>
                </div>
                <p class="font-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  architecto
                  eveniet, dolor quo repellendus pariatur</p>
                <div class="flex items-center gap-2 text-sm font-medium py-2">
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Adobe XD</span>
                  <span class="bg-gray-200 rounded px-2 py-1 hover:text-gray-600">Figma</span>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-lg font-semibold group-hover:text-gray-600">$500<small>/Hour</small></h3>
                  <a href="#"
                    class="uppercase text-base font-bold py-2 px-3 rounded text-white tracking-wide bg-gray-600 hover:bg-gray-800 ">Apply
                    Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Career;