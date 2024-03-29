'use client'
import NavBar from "@/Components/NavBar/Index";
import Landing from "@/Components/Home/Index";
import Image from "next/image";
import Description from "@/Components/About/Description";
import Us from "@/Components/About/Us"
import Footer from "@/Components/Footer/Index";
import Project from "@/Components/Projects/Index";
import More from "@/Components/About/Plus";
import React, { useEffect } from 'react';



export default function Home() {
  
  return (
    <main className="bg-[url('https://www.shutterstock.com/image-photo/head-shot-portrait-happy-bearded-600nw-1740774431.jpg')] bg-no-repeat bg-top bg-cover bg-fixed md:min-h-screen flex-col items-center justify-between font-medium">
      <Landing/>
      <Description />
      <Project/>
      <Us/>
    </main>
  );
}
