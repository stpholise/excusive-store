"use client";
import Image from "next/image";
import { LoginForm } from "../components/utilitycomponents/LoginForm";

const page = () => {
  return (
    <div className="container mx-auto lg:px-8 flex flex-row justify-between py-12">
      <div className="bg-[#CBE4E8] w-[760px]">
        <Image
          src="/Side Image.svg"
          alt="side image "
          width="100"
          height="100"
          className="lg:w-[760px] lg:h-[700px] mr-auto "
        />
      </div>
      <div className="form flex flex-col items-center justify-center">
        <div className="w-96 ">
          <h1 className=" text-4xl font-medium ">Log in to Exclusive</h1>
          <p className="mt-4">Enter your details below</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
