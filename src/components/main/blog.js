import React from "react";
import aboutIcon from "../../assets/img/about.jpg"
import Header from "../header";

const Blog = (props) => {
  const {titleBlog} = props;
  return (
    <>
      <Header />
      <section id="blog" class="py-14">
        <div class="max-w-7xl mx-auto px-3">
          <div class="text-left pb-5">
            <h5
              class="inline-block text-gray-500 text-sm font-medium font-sans tracking-widest py-1 uppercase after:content-[''] after:inline-block after:h-px after:w-32 after:bg-gray-700 after:my-1 after:mx-2">
              {titleBlog.blogTitle}
            </h5>
            <h3 class="text-2xl md:text-3xl font-extrabold uppercase text-black"
              style={{ fontFamily: "'Raleway', sans-serif" }}>
                {titleBlog.blogSubTitle}
            </h3>
          </div>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
            <div
              class="group rounded-sm border bg-white text-black text-base text-left p-3 lg:p-4 h-full shadow-md hover:shadow-xl">
              <div class="mb-5 h-52 w-full bg-gray-100">
                <img src={aboutIcon} alt="Image" class="h-full w-full" />
              </div>
              <div class="flex flex-col item-baseline gap-3">
                <h3 class="text-gray-400 text-sm font-semibold pb-1 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 class="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" class="text-blue-500 font-medium">
                  <span class="pr-2"><i class="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              class="group rounded-sm border bg-white text-black text-base text-left p-3 lg:p-4 h-full shadow-md hover:shadow-xl">
              <div class="mb-5 h-52 w-full bg-gray-100">
                <img src={aboutIcon} alt="Image" class="h-full w-full" />
              </div>
              <div class="flex flex-col item-baseline gap-3">
                <h3 class="text-gray-400 text-sm font-semibold pb-1 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 class="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" class="text-blue-500 font-medium">
                  <span class="pr-2"><i class="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              class="group rounded-sm border bg-white text-black text-base text-left p-3 lg:p-4 h-full shadow-md hover:shadow-xl">
              <div class="mb-5 h-52 w-full bg-gray-100">
                <img src={aboutIcon} alt="Image" class="h-full w-full" />
              </div>
              <div class="flex flex-col item-baseline gap-3">
                <h3 class="text-gray-400 text-sm font-semibold pb-1 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 class="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" class="text-blue-500 font-medium">
                  <span class="pr-2"><i class="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              class="group rounded-sm border bg-white text-black text-base text-left p-3 lg:p-4 h-full shadow-md hover:shadow-xl">
              <div class="mb-5 h-52 w-full bg-gray-100">
                <img src={aboutIcon} alt="Image" class="h-full w-full" />
              </div>
              <div class="flex flex-col item-baseline gap-3">
                <h3 class="text-gray-400 text-sm font-semibold pb-1 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 class="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" class="text-blue-500 font-medium">
                  <span class="pr-2"><i class="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              class="group rounded-sm border bg-white text-black text-base text-left p-3 lg:p-4 h-full shadow-md hover:shadow-xl">
              <div class="mb-5 h-52 w-full bg-gray-100">
                <img src={aboutIcon} alt="Image" class="h-full w-full" />
              </div>
              <div class="flex flex-col item-baseline gap-3">
                <h3 class="text-gray-400 text-sm font-semibold pb-1 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 class="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" class="text-blue-500 font-medium">
                  <span class="pr-2"><i class="fa-solid fa-angles-right"></i></span>Learn More
                </a>
              </div>
            </div>
            <div
              class="group rounded-sm border bg-white text-black text-base text-left p-3 lg:p-4 h-full shadow-md hover:shadow-xl">
              <div class="mb-5 h-52 w-full bg-gray-100">
                <img src={aboutIcon} alt="Image" class="h-full w-full" />
              </div>
              <div class="flex flex-col item-baseline gap-3">
                <h3 class="text-gray-400 text-sm font-semibold pb-1 group-hover:text-gray-500">_ November 21, 2023</h3>
                <h3 class="text-lg font-bold group-hover:underline">
                  Benefits of Custom Software Development for Small Business
                </h3>
                <a href="#" class="text-blue-500 font-medium">
                  <span class="pr-2"><i class="fa-solid fa-angles-right"></i></span>Learn More
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