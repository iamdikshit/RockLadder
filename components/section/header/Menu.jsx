import Link from "next/link";
import { Button } from "@/components/ui/button";

const Menu = ({ type, footer = false }) => {
  let Linkclases = "";
  if (footer) {
    Linkclases =
      "block text-gray-100 hover:text-gray-200 text-lg md:text-xl  py-2";
  } else {
    Linkclases =
      "block text-gray-700 hover:text-[#711094]  text-lg md:text-xl  py-2";
  }
  return (
    <ul
      className={`flex ${
        type === "mobile" ? "flex-col" : ""
      }  justify-between items-center gap-3 md:gap-8`}
    >
      <Link href="#" className={`${Linkclases} `}>
        Home
      </Link>
      <Link href="#" className={`${Linkclases} `}>
        Services
      </Link>
      <Link href="#" className={`${Linkclases} `}>
        Careers
      </Link>
      {!footer && (
        <Button
          variant={"outline"}
          className={" md:hidden text-sm sm:text-base btn"}
        >
          Contact Us
        </Button>
      )}
    </ul>
  );
};

export default Menu;
