import React, { useEffect, useState } from "react";
import Header from "../Header";

function Count() {
  const [count, setCount] = useState(0);
  const [exp, setExp] = useState(0);
  const [team, setTeam] = useState(0);
  const [projects, setProjects] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count}`;
  });
  
  return (
    <>
      <Header />
      <section id="counts" className="bg-gray-200 border-gray-600 py-14 mt-14 border-y-2">
        <div className="px-3 mx-auto max-w-7xl">
          <div className="grid grid-cols-4">
            <div className="text-center text-black">
            <p>You clicked {count} times</p>
              <h3 className="pb-3 text-4xl font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>{97 + count}%</h3>
              <p className="text-gray-600">Happy Clients</p>
              <button type="button" className="opacity-100" onClick={() => setCount(count+1)}> +</button>
            </div>
            <div className="text-center text-black">
              <h3 className="pb-3 text-4xl font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>{10 + exp}+</h3>
              <p className="text-gray-600">Year of experience</p>
              <button type="button" className="opacity-100" onClick={() => setExp(exp+1)}> +</button>
            </div>
            <div className="text-center text-black">
              <h3 className="pb-3 text-4xl font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>{300 + team}+</h3>
              <p className="text-gray-600">Team of Professionals</p>
              <button type="button" className="opacity-100" onClick={() => setTeam(team+1)}> +</button>
            </div>
            <div className="text-center text-black">
              <h3 className="pb-3 text-4xl font-bold" style={{ fontFamily: "'Raleway', sans-serif" }}>{500 + projects}+</h3>
              <p className="text-gray-600">Projects Completed</p>
              <button type="button" className="opacity-100" onClick={() => setProjects(projects+1)}> +</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Count;