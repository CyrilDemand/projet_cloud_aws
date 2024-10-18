'use client'

import BackgroundHeader from "@/app/ui/BackgroundHeader";
import AboutImageWithText from "@/app/ui/AboutImageWithText";
import {useState} from "react";

export default function Home() {
  return (
      <div>
          <BackgroundHeader/>
          <section className={"pt-10"}>
              <AboutImageWithText isHomePage={true}/>
          </section>
      </div>
  );
}
