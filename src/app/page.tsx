import React from "react";
import Link from "next/link";
import { CardHoverEffectDemo } from "@/components/Cards";

import Header from "../components/Header/Header";
import ACarousel from "../components/ACarousel/ACarousel";
import Cards from "../components/Cards/Cards";
import { AccordionDemo } from "@/components/Accordian";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <div className="bg-black h-[20%]">
        <Header />
      </div>
      <div>
        <ACarousel />
      </div>
      <div>
        <CardHoverEffectDemo />
        <AccordionDemo />
      </div>
        <Footer />
    </>
  );
}
