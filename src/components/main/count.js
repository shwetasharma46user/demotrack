import React from "react";
import Header from "../header";

function Count() {
  return (
    <>
      <Header />
      <section id="counts" class="py-14 mt-14 bg-gray-200 border-y-2 border-gray-600">
        <div class="max-w-7xl mx-auto px-3">
          <div class="grid grid-cols-4">
            <div class="text-center text-black">
              <h3 class="text-4xl font-bold pb-3" style={{ fontFamily: "'Raleway', sans-serif" }}>97%</h3>
              <p class="text-gray-600">Happy Clients</p>
            </div>
            <div class="text-center text-black">
              <h3 class="text-4xl font-bold pb-3" style={{ fontFamily: "'Raleway', sans-serif" }}>10+</h3>
              <p class="text-gray-600">Year of experience</p>
            </div>
            <div class="text-center text-black">
              <h3 class="text-4xl font-bold pb-3" style={{ fontFamily: "'Raleway', sans-serif" }}>300+</h3>
              <p class="text-gray-600">Team of Professionals</p>
            </div>
            <div class="text-center text-black">
              <h3 class="text-4xl font-bold pb-3" style={{ fontFamily: "'Raleway', sans-serif" }}>500+</h3>
              <p class="text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Count;