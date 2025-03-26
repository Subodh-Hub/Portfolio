import React from "react";

const Title = ({ title }) => {
  return (
    <div className="relative w-fit mx-auto mt-20">
      <h1 className=" text-5xl my-7 text-center font-primary font-bold ">
        {title}
        <span className="absolute left-0 -bottom-3 w-[90%] h-2 rounded-full bg-[#678D58] transform"></span>
        <span className="absolute right-0 -bottom-6 w-[90%] h-2 rounded-full bg-[#7E588D] transform"></span>
      </h1>
    </div>
  );
};

export default Title;
