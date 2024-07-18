'use client'
import Landing from "@/Components/Home/Index";
import Description from "@/Components/About/Description";
import Us from "@/Components/About/Us"
import Project from "@/Components/Projects/Index";
import React, { useEffect } from 'react';
import WeDo from "@/Components/About/WeDo";
import Fondo from "./saltaColmena.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 900 });
  },[])

  return (
    <main className="bg-no-repeat bg-top sm:bg-cover bg-fixed min-h-screen flex-col items-center justify-between font-medium"
    style={{backgroundImage: `url(${Fondo.src})`}  }>
      <Landing/>
      <Description />
      <WeDo/>
      <Project/>
      <Us/>
    </main>
  );
}
