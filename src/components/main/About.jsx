import React from "react";
import about from '../../assets/img/about.jpg';
import Header from "../Header";
import Heading from "../shared/Heading";

function About() {
  return (
    <>
    <Header/>
    <section id="about" className="py-14">
      <div className="px-3 mx-auto max-w-7xl">
        <Heading titleList={["aboutTitle", "aboutSubTitle"]} />
        <div className="grid lg:grid-cols-2 align-items-center">
          <div className="mb-4 text-sm text-gray-500">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut
              labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut.
            </p>
            <p> Labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <ul className="text-sm text-gray-500">
              <li className="relative pl-5 my-2 text-gray-500">
                <i className="fa-solid fa-check-double text-black absolute left-0 top-[5px]"></i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere recusandae vel nostrum
                impedit provident asperiores ex ratione amet consequuntur aut, adipisci rem nesciunt id
                ab magnam, nihil quasi commodi distinctio.
              </li>
              <li className="relative pl-5 my-2 text-gray-500">
                <i className="fa-solid fa-check-double text-black absolute left-0 top-[5px]"></i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere recusandae vel nostrum
                impedit provident asperiores ex ratione amet consequuntur aut, adipisci rem nesciunt id
                ab magnam, nihil quasi commodi distinctio.
              </li>
              <li className="relative pl-5 my-2 text-gray-500">
                <i className="fa-solid fa-check-double text-black absolute left-0 top-[5px]"></i>
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
          <div className="text-base text-black">
            <div className="">
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