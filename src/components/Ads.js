/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// max-w-[400px]
export const Ads = () => {
  return (
    <div className="px-8 my-6 md:px-0 ">
      <div className="rounded-lg md:rounded-none bg-ads-bg md:bg-none w-full bg-primary h-[312px]  relative overflow-hidden  ">
        <div className="flex items-center justify-between w-full h-full pl-12 md:pl-4 md:h-auto md:pt-4 gap-x-8 ">
          <div className="flex flex-col text-white gap-y-4">
            <h2 className="text-[26px] font-bold">Getir'i indirin!</h2>
            <span className="text-base font-semibold ">
              İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
            </span>
            <div className="flex h-full md:flex-col md:gap-y-2 gap-x-2">
              <a href="#">
                <figure className="w-[160px]  h-full">
                  <img
                    className="h-12"
                    src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                    alt="App Store"
                  />
                </figure>
              </a>
              <a href="#">
                <figure className="w-[160px]  h-full">
                  <img
                    className="h-12 w-[160px]"
                    src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                    alt="Google Play Store"
                  />
                </figure>
              </a>
              <a href="#">
                <figure className="w-[160px]   h-full ">
                  <img
                    className="h-12"
                    src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                    alt="Huawei App Gallery"
                  />
                </figure>
              </a>
            </div>
          </div>
          <figure className="self-end -mb-1 w-[605px] shrink-0 md:hidden  h-[288px] ">
            <img
              className="object-contain w-full h-full "
              src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
              alt="Getir App"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
