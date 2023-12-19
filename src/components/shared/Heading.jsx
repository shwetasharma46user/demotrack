import React from "react";
import { titleHead } from "../../constant";

const Heading = (props) => {
  const { titleList } = props;
  return (
    <>
      <div className="pb-5 text-left">
        <h5 className="inline-block text-gray-500 text-sm font-medium font-sans tracking-widest py-1 uppercase after:content-[''] after:inline-block after:h-px after:w-32 after:bg-gray-700 after:my-1 after:mx-2">
          {titleHead[titleList[0]]}
        </h5>
        <h3
          className="text-2xl font-extrabold text-black uppercase md:text-3xl"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {titleHead[titleList[1]]}
        </h3>
      </div>
    </>
  );
};

export default Heading;
