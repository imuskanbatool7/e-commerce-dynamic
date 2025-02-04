import Image from "next/image";
import tailwand from "tailwindcss";
import Hero from "./hero/page";
import EcommerceSite from "./services/page";
export default function Home() {
  return (
    <main>
  <Hero/>
  <EcommerceSite/>
    </main>
  );
}
