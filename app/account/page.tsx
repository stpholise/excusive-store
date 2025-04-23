"use client";
import EditProfile from "../components/utilitycomponents/EditProfile";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import "animate.css";

const Page = () => {
  const [showAccountNav, setShowAccountNav] = useState(false);

  return (
    <div className="flex container relative mx-auto px-4 flex-col md:flex-row md:gap-4 lg:gap-8">
      <div className="outline-none w-8 h-8  md:hidden absolute top-3 right-4 z-20">
        {showAccountNav ? (
          <button
            type="button"
            title="menu"
            onClick={() => setShowAccountNav(false)}
            aria-label="Close account navigation"
            className="w-full h-full"
          >
            <Image
              src="/icons/clear.svg"
              alt="account navigation"
              width="24"
              height="24"
            />
          </button>
        ) : (
          <button
            className="  "
            type="button"
            title="account"
            onClick={() => setShowAccountNav(true)}
            aria-label="Open account navigation"
          >
            <Image
              src="/icons/menu-05.svg"
              alt="account navigation"
              width="24"
              height="24"
            />
          </button>
        )}
      </div>
      <div
        className={clsx(
          "accountNav md:w-72 lg:w-96 px-6 py-4 md:py-16 flex flex-col  gap-10 justify-start items-start",
          {
            "hidden md:flex": !showAccountNav,
            "flex animate__animated animate__fadeIn": showAccountNav,
          },
        )}
      >
        <div className="flex flex-col gap-2 lg:gap-4">
          <h3 className="font-semibold capitalize"> Manage My Account</h3>
          <ul className="lg:px-4 ml-3 flex flex-col lg:text-base md:text-sm gap-2 ">
            <li>My Profile</li>
            <li>Adress Book</li>
            <li>My Payment Options</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4">
          <h3 className="font-semibold capitalize"> My Order</h3>
          <ul className="lg:px-4  lg:text-base md:text-sm  ml-3 flex flex-col gap-2 ">
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold capitalize"> My Wishlit</h3>
        </div>
      </div>

      <section className="myprofile w-full md:w-10/12">
        <EditProfile />
      </section>
    </div>
  );
};

export default Page;
