/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Loc = () => {
  return (
    <div className="flex items-center w-full h-10">
      <div className="flex justify-between w-full pr-1">
        <div className="flex items-center pl-1">
          <a href="#" className="flex items-center">
            <div className="flex items-center justify-center w-6 h-6">
              <svg
                size="15"
                fill="#5D38C0"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[15px] h-[15px]"
                viewBox="0 0 32 32"
              >
                <path d="M13.328 0.039c-3.465 0-6.931 1.333-9.463 3.865-2.399 2.532-3.865 5.864-3.865 9.463 0 5.198 3.332 9.863 6.264 13.062 1.599 1.599 3.065 2.932 4.265 3.865 0.666 0.4 1.066 0.8 1.466 1.066 0.133 0.133 0.267 0.267 0.4 0.267 0.133 0.133 0.133 0.133 0.133 0.133 0.4 0.267 1.066 0.267 1.466 0l0.133-0.133c0.133 0 0.267-0.133 0.4-0.267 0.4-0.267 0.933-0.666 1.466-1.066 1.2-0.933 2.799-2.266 4.265-3.865 3.066-3.199 6.398-7.864 6.398-13.062 0-3.599-1.333-6.931-3.865-9.463s-5.998-3.865-9.463-3.865zM7.997 13.368c0-2.932 2.399-5.331 5.331-5.331s5.331 2.399 5.331 5.331c0 2.932-2.399 5.331-5.331 5.331s-5.331-2.399-5.331-5.331z"></path>
              </svg>
            </div>
            <span className="text-sm text-[#525252] font-semibold">
              Teslimat Adresi Belirle
            </span>
          </a>
        </div>

        <div className="flex items-center justify-center w-6 h-6 ">
          <a href="#">
            <svg
              size="12"
              fill="#5D38C0"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-3 h-3"
            >
              <path d="M7.528 31.331c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224l-13.719-13.719c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l12.096 12.096-12.096 12.096c-0.892 0.892-0.892 2.355 0 3.247z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
