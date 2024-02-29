'use client'
import NavBar from "@/Components/NavBar/Index";
import Landing from "@/Components/Home/Index";
import Description from "@/Components/About/Description";
import Us from "@/Components/About/Us"
import Footer from "@/Components/Footer/Index";
import Project from "@/Components/Projects/Index";
import React, { useEffect } from 'react';




export default function Home() {


  return (
    <main className="bg-[url('https://www.genus.com.py/wp-content/uploads/2021/11/edificios-desarrollador-inmobiliario-Genus-1-scaled.jpg')] bg-cover bg-fixed min-h-screen flex-col items-center justify-between font-medium">
      <NavBar/>
      <Landing/>
      <Description />
      <Project/>
      {/* <More/> */}
      <Us/>
      <Footer/>
    </main>
  );
}
