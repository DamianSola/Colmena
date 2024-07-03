'use client'
import Landing from "@/Components/Home/Index";
import Description from "@/Components/About/Description";
import Us from "@/Components/About/Us"
import Project from "@/Components/Projects/Index";
import React, { useEffect } from 'react';
import WeDo from "@/Components/About/WeDo";
import Fondo from "./saltaColmena.jpg"

export default function Home() {

  return (
    <main className="bg-no-repeat bg-top bg-cover bg-fixed md:min-h-screen flex-col items-center justify-between font-medium"
    style={{backgroundImage: `url(${Fondo.src})`}}>
      <Landing/>
      <Description />
      <WeDo/>
      <Project/>
      <Us/>
    </main>
  );
}
