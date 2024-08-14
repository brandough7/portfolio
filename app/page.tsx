import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero></Hero>
        <section className="h-[200px]">

        </section>
        
      </main>
    </>
  );
}
