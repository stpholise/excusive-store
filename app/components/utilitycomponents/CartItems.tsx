"use client";
import { RootState } from "../../store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { clearCart } from "@/app/store/slices/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const cumulativePrice = useSelector(
    (state: RootState) => state.cart.totalPrice,
  );
  const shippingFee = items.length * 80;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="flex flex-col gap-9 w-full ">
        <div className="grid grid-cols-3 px-6  py-4 rounded-md shadow-sm bg-[#f4f4f4]">
          <h4 className=" dark:invert">Product</h4>
          <h4 className="dark:invert">Price</h4>
          <h4 className="dark:invert">Quantity</h4>
        </div>
        {items.map((item) => (
          <div
            key={item.product._id}
            className="grid   grid-cols-3 px-6 py-4 text-sm bg-[#f4f4f4] rounded-md shadow-sm -shadow-sm"
          >
            <div className="flex justify-start gap-4">
              <Image
                src={item.product.image.url}
                alt={item.product.name}
                width="30"
                height="24"
              />
              {item.product.name}
            </div>
            <h4 className="dark:invert">${item.product.price} </h4>
            <h4 className="dark:invert">{item.quantity}</h4>
          </div>
        ))}
        <div className="flex justify-between w-full">
          {items.length > 0 && (
            <button
              type="button"
              onClick={handleClearCart}
              className="bg-red-600 dark:text-white block mx-auto text-white md:w-40 px-6 py-2 rounded-md border border-gray-200 capitalize"
            >
              {" "}
              clear cart{" "}
            </button>
          )}
        </div>
        <div className=" flex justify-center">
          <div className="w-96 border-gray-400 rounded-md h-fit flex flex-col gap-8">
            <h3 className="font-semibold "> Cart Total</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between border-b-2 border-gray-300 text-sm py-2">
                <p className="">Subtotal:</p>{" "}
                <p className="">${cumulativePrice}</p>
              </div>
              <div className="flex justify-between border-b-2 border-gray-300 text-sm py-2">
                <p className="">Shipping:</p>{" "}
                <p className="">${shippingFee} </p>
              </div>
              <div className="flex justify-between border-b-2 border-gray-300 text-sm py-2">
                <p className="">Total:</p>{" "}
                <p className="">${shippingFee + cumulativePrice} </p>
              </div>
            </div>
            <button className="text-white bg-red-600 rounded-md px-4 py-3 w-80 mx-auto">
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
