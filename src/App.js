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
//
function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-zinc-50 ">
      <NavLayout />

      <HeroSection />
      <Categories />
      <div className="w-full h-auto mb-16 bg-zinc-50 ">
        <main className="max-w-[1232px]  flex flex-col mx-auto lg:-ml-1 lg:-mr-2  ">
          <Promotions />
          <Ads />
          <Cards />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
