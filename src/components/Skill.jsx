import { skillsCommand } from "@/assets/Data/data";
import { HoverEffect } from "./ui/card-hover-effect";
import Title from "./Title";

const Skill = ({ id }) => {
  return (
    <div className="px-5 xl:px-40 lg:px-10" id={id}>
      <Title title="Skills" />
      <HoverEffect items={skillsCommand} />
    </div>
  );
};

export default Skill;
