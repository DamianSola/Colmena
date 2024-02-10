import NavBar from "@/Components/NavBar/Index";
import Landing from "@/Components/Home/Index";
import Image from "next/image";
import Description from "@/Components/About/Description";
import Us from "@/Components/About/Us"
import Footer from "@/Components/Footer/Index";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between font-raleway font-medium">
      <NavBar/>
      <Landing/>
      <Description/>
      <Us/>
      <Footer/>
    </main>
  );
}
