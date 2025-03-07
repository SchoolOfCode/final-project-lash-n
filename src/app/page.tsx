import Image from "next/image";
import WeatherApp from "@/components/weather";
import { Locations } from "@/components/locations";
import WhenSubheading from "@/components/ui/when-subheading";
import WhySubheading from "@/components/ui/why-subheading";
import Footer from "@/components/footer";
import WhereSubheading from "@/components/ui/where-subheading";
// import Motivator from "@/components/Motivator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 p-5 overflow-x-hidden">
      <Image
        src="/sTsIcon.png"
        alt="Logo"
        width={100}
        height={38}
        priority
        className="rounded-lg"
      />
      <h1 className="text-5xl font-bold text-center">Sofa to Strider</h1>

      <WhenSubheading />

      <WeatherApp />
      <WhereSubheading />
      <Locations />
      <WhySubheading />
      {/* <Motivator /> */}
      <Footer />
    </main>
  );
}
