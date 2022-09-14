import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slick";

export function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  const [selected, setSelected] = useState("TR");
  const [value, setValue] = useState("");
  return (
    <div className="relative h-[500px] before:bg-hero-bg before:absolute before:inset-0 before:w-full before:h-full before:z-[5] md:hidden">
      <Slider {...settings}>
        <div className="">
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            alt="slider-1"
          />
        </div>
        <div className="">
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            alt="slider-2"
          />
        </div>
        <div className="">
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            alt="slider-3"
          />
        </div>
        <div className="">
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
            alt="slider-4"
          />
        </div>
      </Slider>
      <div className=" max-w-[1232px] w-full bg-transparent  absolute top-0 z-10 h-full -translate-x-1/2 p-11 lg:px-8 left-1/2 flex items-center justify-center ">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start gap-y-8 ">
            <img
              className="h-[180px] w-[180px]"
              src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
              alt="getir"
            />
            <h1 className="w-auto max-w-[350px] text-4xl font-semibold text-white lg:max-w-none ">
              Dakikalar içinde kapınızda
            </h1>
          </div>
          <div className="w-[400px] min-h-[201px] h-full py-6 px-4 bg-white rounded-lg shrink-0 flex flex-col gap-y-4 ">
            <h5 className="text-base font-semibold text-center text-primary ">
              Giriş yap veya kayıt ol
            </h5>

            <div className="flex gap-3">
              {/* <select  className="w-1/3 px-3 border-2 rounded-sm outline-none border-border bg-slate-100" >
              <option>+90</option>
              <option>+43</option>
              </select> */}
              <ReactFlagsSelect
                className="flag-select !pb-0 !bg-white"
                countries={["US", "GB", "FR", "DE", "IT", "TR"]}
                customLabels={{
                  US: "+7",
                  GB: "+8",
                  FR: "+9",
                  DE: "+10",
                  IT: "+11",
                  TR: "+90",
                }}
                placeholder=""
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
              <label className="relative flex-1 ">
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="border-2 w-full h-14 bg-white border-gray-200 rounded-[4px] pt-[10px] pr-[40px] pl-[16px]   outline-none text-sm transition-colors focus:border-secondary hover:border-secondary peer"
                  required
                />
                <span className="absolute top-0 left-0 flex items-center h-full px-4 text-sm font-normal text-gray-500 transition-all pointer-events-none peer-focus:h-6 peer-valid:h-6 peer-focus:text-xs peer-valid:text-xs peer-focus:text-secondary peer-valid:text-secondary ">
                  Telefon numarası
                </span>
                <div className="mt-2 -mb-2 text-xs text-color-danger">
                  {value.length < 8 && value
                    ? "Lütfen geçerli bir telefon numarası giriniz."
                    : ""}
                </div>
              </label>
            </div>
            <button className="mt-2 text-sm font-semibold w-full py-[14px] px-4 rounded-lg text-primary bg-brand-yellow hover:bg-secondary hover:text-yellow-hover transition-all ">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
