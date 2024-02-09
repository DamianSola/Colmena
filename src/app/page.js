import NavBar from "@/Components/NavBar/Index";
import Landing from "@/Components/Home/Index";
import Image from "next/image";
import Description from "@/Components/About/Description";

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <NavBar/>
      <Landing/>
      <Description/>
    </main>
  );
}
