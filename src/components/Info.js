/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Info = ({ title, p1, p2, p3, p4, p5 }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-primary text-[18px] font-normal mb-1 ">{title}</div>
      <div>
        <a className="text-sm text-black " href="#">
          <span>{p1}</span>
        </a>
      </div>
      <div>
        <a className="text-sm text-black " href="#">
          <span>{p2}</span>
        </a>
      </div>
      <div>
        <a className="text-sm text-black " href="#">
          <span>{p3}</span>
        </a>
      </div>
      <div>
        <a className="text-sm text-black " href="#">
          <span>{p4}</span>
        </a>
      </div>
      <div>
        <a className="text-sm text-black " href="#">
          <span>{p5}</span>
        </a>
      </div>
    </div>
  );
};
