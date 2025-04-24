import Link from "next/link";
import Filter from "../shopping/Filter";
import clsx from "clsx";
import Image from "next/image";
import "animate.css";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Sign Up", href: "/signup" },
];

interface ShowNavOnMobile {
  showMenu?: boolean;
  setShowMenu?: (value: boolean) => void;
}

const Nav = ({ showMenu, setShowMenu }: ShowNavOnMobile) => {
  const pathname = usePathname();
  return (
    <div
      className={clsx("dark:invert z-[999] isolate", {
        "fixed md:top-20 w-full xxs:w-72 transition-transform   animate__animated animate__slideInLeft animate__faster  ease-in-out translate-x-0  top-0 z-[999] h-screen left-0 bg-gray-400  lg:bg-transparent lg:static xs:w-72 px-4 py-6 lg:px-0 lg:py-0":
          showMenu,
        "static bg-transparent transition-transform -translate-x-full lg:translate-x-0":
          !showMenu,
      })}
    >
      <ul
        className={clsx("lg:flex   flex-row lg:flex-row gap-4 text-black ", {
          "flex-col uppercase md:capetalize font-semibold translate-x-1 lg:flex-nowrap text-gray-800 gap-6 text-lg":
            showMenu,
          hidden: !showMenu,
        })}
      >
        {navItems.map((item, index) => (
          <li
            key={`${item.href}${index}`}
            className={clsx("", {
              "border-b-2 border-gray-400 py-4 lg:py-0 lg:border-b-0": showMenu,
            })}
          >
            <Link
              href={item.href}
              className={clsx("whitespace-nowrap sm:border-none", {
                "border-b-2 border-blue-900":
                  pathname !== "/" && pathname.includes(item.href),
                "border-none":
                  (pathname !== "/" && !pathname.includes(item.href)) ||
                  item.href === "/",
              })}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className=" absolute z-50 top-6 right-3 md:hidden">
        <button title="close button" onClick={() => setShowMenu?.(false)}>
          <Image
            src="/icons/clear.svg"
            alt="close icon"
            width="30"
            height="30"
            className=""
          />
        </button>
      </div>
      <div className="md:hidden">
        <Filter />
      </div>
    </div>
  );
};

export default Nav;
