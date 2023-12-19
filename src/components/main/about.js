import React from "react";
import about from '../../assets/img/about.jpg';
import Header from "../header";

const About = (props) => {
  const {titleAbout} = props;
  return (
    <>
    <Header/>
    <section id="about" class="py-14">
      <div class="max-w-7xl mx-auto px-3">
        <div class="text-left pb-5">
          <h5
            class="inline-block text-gray-500 text-sm font-medium font-sans tracking-widest py-1 uppercase after:content-[''] after:inline-block after:h-px after:w-32 after:bg-gray-700 after:my-1 after:mx-2">
            {titleAbout.aboutTitle}
          </h5>
          <h3 class="text-2xl md:text-3xl font-extrabold uppercase text-black"
            style={{ fontFamily: "'Raleway', sans-serif" }}>
            {titleAbout.aboutSubtitle}
          </h3>
        </div>
        <div class="grid lg:grid-cols-2 align-items-center">
          <div class="text-gray-500 text-sm mb-4">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut
              labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut.
            </p>
            <p> Labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <ul class="text-gray-500 text-sm">
              <li class="relative my-2 pl-5 text-gray-500">
                <i class="fa-solid fa-check-double text-black absolute left-0 top-[5px]"></i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere recusandae vel nostrum
                impedit provident asperiores ex ratione amet consequuntur aut, adipisci rem nesciunt id
                ab magnam, nihil quasi commodi distinctio.
              </li>
              <li class="relative my-2 pl-5 text-gray-500">
                <i class="fa-solid fa-check-double text-black absolute left-0 top-[5px]"></i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere recusandae vel nostrum
                impedit provident asperiores ex ratione amet consequuntur aut, adipisci rem nesciunt id
                ab magnam, nihil quasi commodi distinctio.
              </li>
              <li class="relative my-2 pl-5 text-gray-500">
                <i class="fa-solid fa-check-double text-black absolute left-0 top-[5px]"></i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere recusandae vel nostrum
                impedit provident asperiores ex ratione amet consequuntur aut, adipisci rem nesciunt id
                ab magnam, nihil quasi commodi distinctio.
              </li>
            </ul>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut
              labore et dolore magna aliqua.</p>
          </div>
          <div class="text-black text-base">
            <div class="">
              <img src={about} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About;