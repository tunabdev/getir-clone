/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Products from "../api/categories.json";

export const Categories = () => {
  return (
    <div
      style={{ boxShadow: "rgb(88 63 181 / 8%) 0px 2px 16px" }}
      className="container mx-auto bg-white "
    >
      <div className="flex max-w-[1232px] flex-col w-full mx-auto pt-6 gap-y-2 mb-4 ">
        <h6 className="pl-8 text-sm font-semibold ">Kategoriler</h6>
        <div className="grid grid-cols-10 gap-4 px-8 mb-6 lg:grid-cols-5 ">
          {Products.map(({ image, title, id }) => (
            <button key={id} className="w-full">
              <a
                href="#"
                className=" flex flex-col items-center justify-center  min-h-[108.8px] w-full h-full gap-y-2 group hover:bg-primary-light transition-all"
              >
                <figure className="flex items-center justify-center w-12 h-12">
                  <img
                    alt="gt"
                    src={image}
                    className="border border-gray-300 rounded-lg "
                  ></img>
                </figure>
                <span
                  className=" text-sm font-semibold
            min-h-[40px]
             whitespace-normal group-hover:text-primary transition-colors"
                >
                  {title}
                </span>
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
