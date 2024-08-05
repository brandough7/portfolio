import Image from "next/image";
import Header from "./(components)/Header";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="flex h-screen w-full bg-slate-200 relative bg-custom-image bg-cover bg-no-repeat" >
          <div className="flex container mx-auto">
            <div className="flex-1">
              
            </div>
            <div className="flex-1">
              {/* <Image 
                className="w-screen"
                width={100} 
                height={100} 
                src={"/hero-image.jpg"} 
                alt={"hero-image"}></Image> */}
            </div>
          </div>
        </section>
        <section className="h-[200px]">

        </section>
        
      </main>
    </>
  );
}
