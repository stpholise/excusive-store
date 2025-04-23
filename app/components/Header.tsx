"use client";
import Nav from "./utilitycomponents/Nav";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import AccountDropdown from "./utilitycomponents/AccountDropdown";
import "animate.css";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const itemsInCart = useSelector(
    (state: RootState) => state.cart.totalQuantity,
  );
  const itemsInWishlist = useSelector(
    (state: RootState) => state.wishlist.wishlistQuantity,
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );
  const [slideMenu, setSlideMenu] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setSlideMenu(false);
  }, [pathname]);

  const handleMenuToggle = () => {
    setSlideMenu((prev) => !prev);
    console.log(slideMenu);
  };
  const closeAllMenu = () => {
    setShowDropdown(false);
    setSlideMenu(false);
  };
  //
  return (
    <div className="w-full sticky">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-8 md:py-6 w-full">
        <div className="logo flex gap-2 flex-row items-center font-semibold">
          <div className=" lg:hidden  w-6 h-5" onClick={handleMenuToggle}>
            {slideMenu ? (
              <Image
                src="/icons/clear.svg"
                alt="hamburger icon"
                width="35"
                height="35"
                className="dark:invert w-6 h-6"
              />
            ) : (
              <Image
                src="/icons/Hamborger-Icon.svg"
                alt="hamburger icon"
                width="30"
                height="30"
                className="dark:invert w-6 h-5"
              />
            )}
          </div>
          <Link href={"/"} className="font-bold text-xl md:text-2xl">
            Exclusive
          </Link>
        </div>

        <div
          className={clsx(" lg:flex", {
            "flex flex-col": slideMenu,
            hidden: !slideMenu,
          })}
        >
          <Nav showMenu={slideMenu} setShowMenu={setSlideMenu} />
        </div>

        <div className=" flex items-center md:gap-4  lg:gap-6   justify-center">
          <form className="search hidden w-60  bg-gray-200 px-3 py-2 md:flex gap-3 h-8 items-center justify-center ">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none h-6 h-11/12 w-10/12"
            />
            <button title="search" type="submit">
              <Image
                src="/icons/search.svg"
                alt="search"
                width={18}
                height={18}
              />
            </button>
          </form>

          <div className="flex gap-4 items-center">
            {isAuthenticated && (
              <div className="relative flex items-center justify-center">
                {itemsInWishlist > 0 && (
                  <p className="postion absolute text-[8px] lg:text-xs -top-1 -right-1 z-10 bg-red-600 rounded-full w-3 h-3 lg:w-4 lg:h-4 text-white flex items-center justify-center">
                    {itemsInWishlist}
                  </p>
                )}
                <Link href={"/wishlist"}>
                  <Image
                    src="/icons/Wishlist.svg"
                    alt="wishlist"
                    width={30}
                    height={30}
                    className="dark:invert w-5 h-5 lg:w-6 lg:h-6"
                  />
                </Link>
              </div>
            )}
            {isAuthenticated && (
              <div className="relative flex items-center justify-center">
                {itemsInCart > 0 && (
                  <p className="postion absolute font-medium text-[8px] lg:text-xs -top-1 -right-1 z-10 bg-red-600 rounded-full w-3 h-3 lg:w-4 lg:h-4 text-white flex items-center justify-center">
                    {itemsInCart}
                  </p>
                )}
                <Link href={"/cart"} className="">
                  <Image
                    src="/icons/Cart1 with buy.svg"
                    alt="cart"
                    width={30}
                    height={30}
                    className="dark:invert w-5 h-5 lg:w-6 lg:h-6"
                  />
                </Link>
              </div>
            )}
            {
              <div className="relative flex items-center justify-center">
                {isAuthenticated && (
                  <button
                    type="button"
                    title="cart"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className={clsx(
                      "dark:text-white dark:bg-transparent rounded-full md:w-6 md:h-6  lg:w-9 lg:h-9 flex item-center justify-center",
                      {
                        "bg-red-600 dark:bg-red-600 ": showDropdown,
                        "bg-white": !showDropdown,
                      },
                    )}
                  >
                    <Image
                      src={`/icons/${showDropdown ? "light-user" : "user"}.svg`}
                      alt="user"
                      width={30}
                      height={30}
                      className="dark:invert transition-colors  duration-500 ease-in-out  w-5 h-5 lg:w-6 lg:h-6"
                    />
                  </button>
                )}
                <div
                  className={clsx("absolute top-10 right-0", {
                    block: showDropdown,
                    hidden: !showDropdown,
                  })}
                >
                  <AccountDropdown />
                </div>
              </div>
            }
          </div>
        </div>
        {showDropdown && (
          <div
            className="overlay fixed top-0 bottom-0 left-0 right-0  z-30 "
            onClick={closeAllMenu}
          ></div>
        )}
        {slideMenu && (
          <div
            className="overlay fixed top-0 bottom-0 left-0 right-0  z-30 "
            onClick={closeAllMenu}
          ></div>
        )}
      </div>
      <div className="border border-gray-300 w-full"></div>
    </div>
  );
};

export default Header;
