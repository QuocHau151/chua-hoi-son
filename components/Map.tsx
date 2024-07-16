import Image from "next/image";
import React from "react";

export default function Map() {
  return (
    <section className=" pt-20" id="map">
      <h1 className="text-white text-[30px] text-center px-14 py-5">
        Sơ đồ chánh điện Chùa Hội Sơn {""}
      </h1>
      <Image src="/assets/images/map.jpg" width={1920} height={1080} alt="" />
    </section>
  );
}
