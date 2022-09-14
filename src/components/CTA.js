/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export const CTA = ({ setcloseCTA }) => {
  const arr = Array(3).fill();
  console.log(arr);

  return (
    <div className="px-[6px]   h-[72px]">
      <div className="flex items-center justify-between w-full h-full ">
        <div
          className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-light "
          onClick={() => setcloseCTA(true)}
        >
          <a href="#">
            <svg
              name="close"
              size="12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-3 h-3"
              fill="#5D3EBC"
            >
              d
              <path d="M31.331 0.669c-0.892-0.892-2.334-0.892-3.226 0l-12.104 12.104-12.104-12.104c-0.892-0.892-2.334-0.892-3.226 0s-0.892 2.334 0 3.226l12.104 12.104-12.104 12.104c-0.892 0.892-0.892 2.334 0 3.227s2.334 0.892 3.226 0l12.104-12.105 12.104 12.105c0.892 0.892 2.334 0.892 3.226 0s0.892-2.334 0-3.227l-12.104-12.104 12.104-12.104c0.892-0.869 0.892-2.334 0-3.226z"></path>
            </svg>
          </a>
        </div>
        <figure className="w-12 h-12" shape="NORMAL" data-testid="wrapper">
          <img
            src="https://getir.com/images/icons/apple-icon-120x120.png"
            alt="Getir Logo"
            className="w-12 h-12 rounded-lg"
          />
        </figure>
        <div className="flex flex-col ">
          <h1 className="text-base font-semibold text-primary -mb-[2px]">
            Getir
          </h1>
          <div className="flex w-full gap-x-2 -mb-[2px] ">
            <div className="flex gap-x-[1px]">
              {" "}
              {Array(5)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-[11px] h-[11px]"
                    fill="#FFD300"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M31.928 12.297c-0.174-0.523-0.625-0.916-1.177-0.988l-9.286-1.352-4.156-8.414c-0.247-0.494-0.756-0.814-1.308-0.814s-1.061 0.32-1.308 0.814l-4.156 8.414-9.286 1.352c-0.552 0.073-1.003 0.465-1.177 0.988s-0.029 1.104 0.363 1.482l6.714 6.54-1.584 9.243c-0.087 0.552 0.131 1.090 0.581 1.424 0.45 0.32 1.046 0.363 1.526 0.116l8.298-4.374 8.313 4.374c0.494 0.262 1.075 0.218 1.526-0.116s0.669-0.872 0.581-1.424l-1.584-9.243 6.714-6.54c0.436-0.378 0.581-0.959 0.407-1.482z"></path>
                  </svg>
                ))}
            </div>

            <span className="text-[10px] text-card-gray">196.754</span>
          </div>
          <div className="-mt-[1px] text-[11px] text-card-gray">
            Getir bi mutluluk!
          </div>
        </div>
        <button className="px-3 py-2 text-sm font-semibold text-white rounded-lg bg-primary">
          <a href="#">Uygulamayı aç</a>
        </button>
      </div>
    </div>
  );
};
