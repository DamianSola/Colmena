import NavBar from "@/Components/NavBar/Index";
import Landing from "@/Components/Home/Index";
import Image from "next/image";
import Description from "@/Components/About/Description";
import Us from "@/Components/About/Us"
import Footer from "@/Components/Footer/Index";
import Project from "@/Components/Projects/Index";
import More from "@/Components/About/More";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between font-raleway font-medium">
      <NavBar/>
      <Landing/>
      <Description/>
      <More/>
      <Us/>
      <Project/>
      <Footer/>
    </main>
  );
}
