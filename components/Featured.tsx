"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const images = [
  { image: "/assets/images/IMG_1607.jpg", name: "Miếu bà Chúa Sứ" },
  { image: "/assets/images/IMG_1647.jpg", name: "Phòng Phương Trượng" },
  {
    image: "/assets/images/IMG_1646.jpg",
    name: "Pháp thờ sư trưởng Như Thanh",
  },
  { image: "/assets/images/IMG_1641.jpg", name: "Miếu ông Quan Công" },
  {
    image: "/assets/images/IMG_1627.jpg",
    name: "Đức Phật Thích Ca nhập niết bàn",
  },
  { image: "/assets/images/IMG_1625.jpg", name: "Điện thờ Quan Thế Âm Bồ Tát" },
  {
    image: "/assets/images/IMG_1620.jpg",
    name: "Đức Phạt Thích Ca Mâu Ni và hai vị Hộ Pháp",
  },
  { image: "/assets/images/IMG_1613.jpg", name: "Đằng trước Thánh Điện " },
  { image: "/assets/images/IMG_1609.jpg", name: "Điện thờ ngài Di Lặc" },
];
export default function Featured() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className=" pt-20 md:max-w-[70%] md:mx-auto" id="featured">
      <h1 className="text-white text-[30px] text-center px-14 py-5">
        Kiến trúc nổi bật Chùa Hội Sơn
      </h1>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full space-y-5 "
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem
              key={index}
              className=" basis-[75%] h-[400px] md:h-[500px] "
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <h1 className="absolute top-2  z-10 left-[5%] px-4 py-[5px] text-[11px] rounded-xl bg-[#2a2121]">
                  {item.name}
                </h1>
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={`${
                current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
              } inline-block h-1 w-[11.1%]`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
