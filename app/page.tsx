import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Holidays from "@/components/Holidays";
import Review from "@/components/Review";
import TraoQua from "@/components/TraoQua";
import Youtube from "@/components/Youtube";

export default function Home() {
  return (
    <>
      <Hero />
      <Review />
      <Youtube />
      <Featured />
      <Holidays />
      <TraoQua />
    </>
  );
}
