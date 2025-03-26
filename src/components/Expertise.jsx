import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { FlipWords } from "./ui/flip-words";
import { BackgroundGradient } from "./ui/background-gradient";
import Title from "./Title";

const Expertise = ({id}) => {
  const dummyContent = [
    {
      description: (
        <>
          <p>
            I am a passionate web developer skilled in JavaScript, EcmaScript,
            React, Tailwind CSS, Java, SQL, and MongoDB. I specialize in
            creating dynamic and user-friendly applications with a strong focus
            on performance and scalability.
          </p>
          <br />
          <p>
            I am currently diving deeper into full-stack development, learning
            Node.js to enhance my backend skills. My expertise spans from
            frontend development with React.js to database management using SQL
            and MongoDB.
          </p>
        </>
      ),
      badge: "Web Developer",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      description: (
        <>
          <p>
            Experience in both functional and OOP programming paradigms, I am a
            software developer with a strong foundation in Java and JavaScript.
          </p>
          <br />
          <p>
            I have a keen interest in developing scalable and efficient
            applications that solve real-world problems. I am currently
            exploring the world of cloud computing and machine learning to
            enhance my skills and broaden my knowledge.
          </p>
          <br />
          <p>
            I am passionate about learning new technologies and frameworks to
            stay updated with the latest trends in the tech industry.
          </p>
        </>
      ),
      badge: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


  return (
    <div className="w-full px-5 xl:px-40 lg:px-10 mt-20" id={id}>

      <Title title="My Expertise" />

      <TracingBeam className="pr-6">
        <div className=" mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <div
                className={`relative lg:flex xl:gap-10 items-center lg:px-10 ${
                  index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full pl-10 flex flex-col py-2 lg:w-2/3 ${
                    index % 2 == 0 ? "lg:items-start" : "lg:items-end"
                  }`}
                >
                  <h2 className="bg-[#7E588D] text-white rounded-full text-sm lg:text-2xl  w-fit px-4 py-2 mb-4 font-tertiary font-bold">
                    {item.badge}
                  </h2>

                  <div className="text-base lg:text-lg text-justify  prose prose-sm dark:prose-invert font-secondary">
                    {item.description}
                  </div>
                </div>
                <div className="h-40 w-40 rounded-full shrink-0 overflow-hidden border-4 bg-gradient-to-r from-[#678D58] to-emerald-900 shadow-lg transition-transform duration-300 hover:scale-105 mx-auto lg:relative right-0 top-0">
                  {item?.image && (
                    <img
                      src={item.image}
                      alt="blog thumbnail"
                      className="h-full w-full rounded-full object-cover object-center p-[4px]"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Expertise;
