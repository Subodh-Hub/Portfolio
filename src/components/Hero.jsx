import { FlipWords } from "./ui/flip-words";
import { BackgroundGradient } from "./ui/background-gradient";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

import subodh from "../assets/image/subodh.jpg";
import { Button } from "./ui/moving-border";
const Hero = () => {
  const words = [
    {
      text: "React",
      className: "text-[#678D58] dark:text-[#678D58]",
    },
    {
      text: "&",
    },
    {
      text: "Tailwind",
      className: "text-[#678D58] dark:text-[#678D58]",
    },
  ];

  const flipWords = ["slow-loading", "outdated", "un-optimized"];
  return (
    <>
      <div className="mt-30 px-5 xl:px-40 lg:px-10 shadow-md rounded-b-4xl" id="home">
        <div className="flex flex-col gap-15 items-center">
          <div className="w-50 h-50 rounded-full relative bg-gradient-to-r from-[#678D58] to-emerald-900">
            <img
              src={subodh}
              alt=""
              className="h-full w-full object-cover rounded-full p-[4px]"
            />
            <div className=" absolute bottom-20 -right-20 -rotate-20 rounded-full">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Subodh Rijal 👋
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h1 className="font-secondary text-center text-xl lg:text-6xl font-weight-700">
              Building web-based Application with
            </h1>
            <TypewriterEffectSmooth
              words={words}
              className="font-primary"
              style={{ fontFamily: "Poiret One, sans-serif" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-20 px-5 xl:px-40 lg:px-10">
        <BackgroundGradient className="rounded-[22px] bg-[var(--background)] dark:bg-zinc-900 overflow-hidden">
          <div className="text-2xl md:text-5xl lg:text-7xl font-primary font-bold text-center py-5 md:py-10  bg-white/10 backdrop-blur-lg dark:bg-zinc-900/10 dark:text-white">
            <div>
              Tired of{" "}
              <FlipWords
                words={flipWords}
                className="text-[#678D58] dark:text-[#678D58] font-bold"
              />
              website?
            </div>
            <div className="md:my-15 my-9">
              <h1 className="font-secondary text-base md:text-2xl lg:text-4xl font-normal ">
                Let me be your virtual buddy and create a dynamic,
              </h1>
              <h1 className="font-secondary text-base md:text-2xl lg:text-4xl font-normal">
                user-friendly website that keeps visitors engaged!
              </h1>
            </div>
            <h1 className={"font-bold text-[#678D58] text-xl md:text-3xl lg:text-5xl"}>
              Hi, I'm Subodh Rijal!
            </h1>
          </div>
        </BackgroundGradient>
      </div>
    </>
  );
};

export default Hero;
