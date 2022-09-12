/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Info } from "./Info";
import FooterJson from "../api/footer.json";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
//
export const Footer = () => {
  return (
    <div className="py-12 bg-white ">
      <div className="px-8 mx-auto max-w-[1232px] grid grid-cols-4 gap-x-6 ">
        <div>
          <div className="flex flex-col gap-y-4">
            <div className="text-primary text-[18px]">Getir'i indirin!</div>
            <figure className="w-[160px]  h-full">
              <a href="#">
                <img
                  className="h-12"
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="App Store"
                />
              </a>
            </figure>
            <figure className="w-[160px]  h-full">
              <a href="#">
                <img
                  className="h-12"
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="App Store"
                />
              </a>
            </figure>
            <figure className="w-[160px]  h-full">
              <a href="#">
                <img
                  className="h-12"
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="App Store"
                />
              </a>
            </figure>
          </div>
        </div>
        {FooterJson.map(({ id, title, p1, p2, p3, p4, p5 }) => (
          <Info
            key={id}
            title={title}
            p1={p1}
            p2={p2}
            p3={p3}
            p4={p4}
            p5={p5}
          />
        ))}
      </div>
      <hr className="mt-4  mx-auto max-w-[1168px] h-px bg-gray-200" />
      <div className="px-8 mt-6 flex   max-w-[1232px] mx-auto items-center justify-between text-sm">
        <div className="flex gap-x-2">
          <span className="text-text-black">&copy; 2022 Getir</span>
          <span className="text-primary ">
            <a href="#">&ensp; • &emsp; Bilgi Toplumu Hizmetleri</a>
          </span>
        </div>
        <div className="flex gap-x-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-primary-light group">
            <FaFacebook className="group-hover:fill-secondary" size={20} />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-primary-light group">
            <FaTwitter className="group-hover:fill-secondary " size={20} />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-primary-light group">
            <FaInstagram className="group-hover:fill-secondary " size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
