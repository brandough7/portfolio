export default function HeroSection () {
    return (
    <section className="flex h-screen w-full bg-slate-200 relative bg-custom-image bg-cover bg-no-repeat drop-shadow-2xl" >
        <div className="flex container mx-auto p-32">
          <div className="flex flex-1 flex-col text-white gap-4">
            <h1 className="text-5xl">Hi I'm John</h1>
            <h1 className="text-7xl">a <span className="text-blue-100 drop-shadow-2xl outline-8 stroke-2">Web Developer</span></h1>
            <div className="flex flex-row gap-4">
              <button className="bg-blue-500 rounded-xl p-2 px-4">Book a call</button>
              <a href="/John_Bryan_Parot_resume.pdf" download="John Bryan Parot CV" className="bg-blue-500 rounded-xl p-2 px-4">Download CV</a>
            </div>
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
      )
}