import React from "react";
import CardJson from "../api/cards.json";
// shadow-[rgb(93_62_188_/_4%)_0px_6px_24px]
export const Cards = () => {
  return (
    <div className="grid grid-cols-3 px-8 mt-8 gap-x-4 md:grid-cols-1 md:gap-y-4">
      {CardJson.map(({ id, title, image, caption }) => (
        <div key={id} style={{boxShadow: "rgb(93 62 188 / 4%) 0px 6px 24px"}} className="flex flex-col items-center gap-y-2 pt-[60px] px-4 pb-10 rounded-lg bg-white md:pt-8    text-center">
          <img alt="ge" className="w-[150px] h-[150px] mb-4 " src={image}  />
          <span className="text-[18px] md:text-base font-semibold text-primary">{title}</span>
          <span className="text-[15px] text-card-gray">{caption}</span>
        </div>
      ))}
    </div>
  );
};
