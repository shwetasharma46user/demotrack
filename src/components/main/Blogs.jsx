import React from "react";
import aboutIcon from "../../assets/img/about.jpg"
import Header from "../Header";
import Heading from "../shared/Heading";

function Blog() {
  return (
    <>
      <Header />
      <section id="blog" className="py-14">
        <div className="px-3 mx-auto max-w-7xl">
          {/* <div className="pb-5 text-left">
            <h5
              className="inline-block text-gray-500 text-sm font-medium font-sans tracking-widest py-1 uppercase after:content-[''] after:inline-block after:h-px after:w-32 after:bg-gray-700 after:my-1 after:mx-2">
              {titleBlog?.blogTitle}
            </h5>
            <h3 className="text-2xl font-extrabold text-black uppercase md:text-3xl"
              style={{ fontFamily: "'Raleway', sans-serif" }}>
                {titleBlog?.blogSubTitle}
            </h3>
          </div> */}
          <Heading titleList={["blogTitle", "blogSubTitle"]} />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            <div
              className="h-full p-3 text-base text-left text-black bg-white border rounded-sm shadow-md group lg:p-4 hover:shadow-xl">
              <div className="w-full mb-5 bg-gray-100 h-52">
                <img src={aboutIcon} alt="Image" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-3 item-baseline">
                <h3 className="pb-1 text-sm font-semibold text-gray-400 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 className="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" className="font-medium text-blue-500">
                  <span className="pr-2"><i className="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              className="h-full p-3 text-base text-left text-black bg-white border rounded-sm shadow-md group lg:p-4 hover:shadow-xl">
              <div className="w-full mb-5 bg-gray-100 h-52">
                <img src={aboutIcon} alt="Image" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-3 item-baseline">
                <h3 className="pb-1 text-sm font-semibold text-gray-400 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 className="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" className="font-medium text-blue-500">
                  <span className="pr-2"><i className="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              className="h-full p-3 text-base text-left text-black bg-white border rounded-sm shadow-md group lg:p-4 hover:shadow-xl">
              <div className="w-full mb-5 bg-gray-100 h-52">
                <img src={aboutIcon} alt="Image" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-3 item-baseline">
                <h3 className="pb-1 text-sm font-semibold text-gray-400 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 className="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" className="font-medium text-blue-500">
                  <span className="pr-2"><i className="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              className="h-full p-3 text-base text-left text-black bg-white border rounded-sm shadow-md group lg:p-4 hover:shadow-xl">
              <div className="w-full mb-5 bg-gray-100 h-52">
                <img src={aboutIcon} alt="Image" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-3 item-baseline">
                <h3 className="pb-1 text-sm font-semibold text-gray-400 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 className="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" className="font-medium text-blue-500">
                  <span className="pr-2"><i className="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              className="h-full p-3 text-base text-left text-black bg-white border rounded-sm shadow-md group lg:p-4 hover:shadow-xl">
              <div className="w-full mb-5 bg-gray-100 h-52">
                <img src={aboutIcon} alt="Image" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-3 item-baseline">
                <h3 className="pb-1 text-sm font-semibold text-gray-400 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 className="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" className="font-medium text-blue-500">
                  <span className="pr-2"><i className="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              className="h-full p-3 text-base text-left text-black bg-white border rounded-sm shadow-md group lg:p-4 hover:shadow-xl">
              <div className="w-full mb-5 bg-gray-100 h-52">
                <img src={aboutIcon} alt="Image" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-3 item-baseline">
                <h3 className="pb-1 text-sm font-semibold text-gray-400 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 className="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" className="font-medium text-blue-500">
                  <span className="pr-2"><i className="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog;