import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Ads,
  Cards,
  Categories,
  Footer,
  HeroSection,
  Promotions,
} from "./components";
import { NavLayout } from "./layout/NavLayout";
import { useMediaQuery } from "@react-hook/media-query";
import { CTA } from "./components/CTA";
import { Loc } from "./components/Loc";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
//
function App() {
  const matches = useMediaQuery("only screen and (max-width: 760px)");
  const [closeCTA, setcloseCTA] = useState(false);
  const [homeFlagSelected, setHomeFlagSelected] = useState("TR");
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-zinc-50 ">
      {matches && !closeCTA ? <CTA setcloseCTA={setcloseCTA} /> : ""}
      <NavLayout />
      {matches ? (
        <>
          <Loc />
          <figure width="100%" height="" data-testid="wrapper">
            <img
              className="object-cover max-w-[768px] w-full  "
              src="https://cdn.getir.com/misc/62a0ca37c43b9c36436ef4f4_banner_tr_1654704721813.png"
              alt="Promosyon"
            />
          </figure>
          <div className="w-full min-h-[201px]  py-6 px-4 md:pb-0 bg-white rounded-lg shrink-0 flex flex-col  justify-between">
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
                selected={homeFlagSelected}
                onSelect={(code) => setHomeFlagSelected(code)}
              />
              <label className="relative flex-1 ">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="border-2 w-full h-14 bg-white border-gray-200 rounded-[4px] pt-[10px] pr-[40px] pl-[16px]   outline-none text-sm transition-colors focus:border-secondary hover:border-secondary peer"
                  required
                />
                <span className="absolute top-0 left-0 flex items-center h-full px-4 text-sm font-normal text-gray-500 transition-all pointer-events-none peer-focus:h-6 peer-valid:h-6 peer-focus:text-xs peer-valid:text-xs peer-focus:text-secondary peer-valid:text-secondary ">
                  Telefon numarası
                </span>
                <div className="mt-2 -mb-2 text-xs text-color-danger">
                  {inputValue.length < 8 && inputValue
                    ? "Lütfen geçerli bir telefon numarası giriniz."
                    : ""}
                </div>
              </label>
            </div>
            <button className="mt-2 text-sm font-semibold w-full py-[14px] px-4 rounded-lg text-primary bg-brand-yellow hover:bg-secondary hover:text-yellow-hover transition-all ">
              Telefon numarası ile devam et
            </button>
          </div>
        </>
      ) : (
        ""
      )}
      <HeroSection />
      <Categories />
      <div className="w-full h-auto mb-16 bg-zinc-50 ">
        <main className="max-w-[1232px]  flex flex-col mx-auto lg:-ml-1 lg:-mr-2  ">
          {!matches ? <Promotions /> : ""}
          <Ads />
          <Cards />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
