import React, { useState } from "react";
import whiteLogo from "../assets/Logo/subodh_white.png";
import blackLogo from "../assets/Logo/subodh_emerald.png";
import { ModeToggle } from "./ui/mode-toggle";
import { useTheme } from "@/components/Context/theme-provider";
import { GiSwordArray } from "react-icons/gi";
import { LuSwords } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = theme === "dark" ? whiteLogo : blackLogo;
  return (
    <div className="flex justify-between items-center px-5 lg:px-10 xl:px-40 py-2">
      <div className="flex gap-5 items-center">
        <div className="lg:hidden">
          <DropdownMenu onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              {isMenuOpen ? (
                <LuSwords
                  size={30}
                  className="lg:hidden cursor-pointer text-black dark:text-white"
                />
              ) : (
                <GiSwordArray
                  size={30}
                  className="lg:hidden cursor-pointer text-black dark:text-white"
                />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-10">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <a href="#home">Home</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <a href="#expertise">Expertise</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a href="#skills">Skills</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a href="#project">Project</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a href="#contact">Contact</a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <img src={logo} alt="logo of subodh" className="size-15 lg:size-20" />
        </div>
      </div>
      <nav>
        <ul className="hidden gap-20 md:gap-10 items-center text-3xl font-semibold lg:flex">
          <li className="cursor-pointer font-primary uppercase hover:text-emerald-500">
            <a href="#home" class="group">
              <span class="relative inline-block">
                Home
                <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"></div>
              </span>
            </a>
          </li>

          <li className="cursor-pointer font-primary uppercase  hover:text-emerald-500">
            <a href="#expertise" class="group">
              <span class="relative inline-block">
                Expertise
                <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"></div>
              </span>
            </a>
          </li>

          <li className="cursor-pointer font-primary uppercase  hover:text-emerald-500">
            <a href="#skills" class="group">
              <span class="relative inline-block">
                Skill
                <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"></div>
              </span>
            </a>
          </li>

          <li className="cursor-pointer font-primary uppercase  hover:text-emerald-500">
            <a href="#project" class="group">
              <span class="relative inline-block">
                Project
                <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"></div>
              </span>
            </a>
          </li>

          <li className="cursor-pointer font-primary uppercase  hover:text-emerald-500">
            <a href="#contact" class="group">
              <span class="relative inline-block">
                Contact
                <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full"></div>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
