import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Holidays from "@/components/Holidays";
import Map from "@/components/Map";
import Review from "@/components/Review";
import Youtube from "@/components/Youtube";

export default function Home() {
  return (
    <>
      <Hero />
      <Review />
      <Youtube />
      <Featured />
      <Map />
      <Holidays />
    </>
  );
}
