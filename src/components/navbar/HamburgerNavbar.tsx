import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navItems } from "./Navbar";
import TransitionLink from "@/utils/pageTransition/TransitionLink";

const HamburgerNavbar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-fit h-full items-center justify-end flex focus:outline-none absolute top-0 right-[40px]">
        <RxHamburgerMenu className="w-8 h-8 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className=" bg-background text-white backdrop-blur-md font-bold border-none z-[99999999]"
        align="end"
      >
        {navItems.map((element, index) => (
          <div key={index}>
            {index !== 0 && <DropdownMenuSeparator />}
            <DropdownMenuItem key={index}>
              <TransitionLink href={element.link} className="text-black">
                {element.title}
              </TransitionLink>
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default HamburgerNavbar;
