"use client";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const lephatdan = [
  { image: "/assets/images/lephatdan/1.jpg" },
  { image: "/assets/images/lephatdan/2.jpg" },
];
const leramthanggieng = [
  { image: "/assets/images/leramthanggieng/1.jpg" },
  { image: "/assets/images/leramthanggieng/2.jpg" },
];
const levulan = [
  { image: "/assets/images/levulan/1.jpg" },
  { image: "/assets/images/levulan/2.jpg" },
  { image: "/assets/images/levulan/3.jpg" },
  { image: "/assets/images/levulan/4.jpg" },
  { image: "/assets/images/levulan/5.jpg" },
  { image: "/assets/images/levulan/6.jpg" },
];
const lengaythichcamothanhdao = [
  { image: "/assets/images/lengaythichca/1.jpg" },
  { image: "/assets/images/lengaythichca/2.jpg" },
];
const giothokhaison = [
  { image: "/assets/images/giotokhaison/1.jpg" },
  { image: "/assets/images/giotokhaison/2.jpg" },
  { image: "/assets/images/giotokhaison/3.jpg" },
  { image: "/assets/images/giotokhaison/4.jpg" },
  { image: "/assets/images/giotokhaison/5.jpg" },
  { image: "/assets/images/giotokhaison/6.jpg" },
];
export default function Holidays() {
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
  }, [api, current]);

  return (
    <section className=" container pt-20 md:max-w-[70%]" id="holiday">
      <h1 className="text-white text-[30px] text-center px-5 py-5">
        Ngày lễ quan trọng Chùa Hội Sơn
      </h1>
      <div>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Lễ Vu Lan</AccordionTrigger>
            <AccordionContent>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-5 py-3"
              >
                <CarouselContent>
                  {levulan.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
                        <Image
                          src={item.image}
                          layout="fill"
                          objectFit="cover"
                          alt=""
                        />
                        {/* <h1 className="absolute top-2 left-2 px-4 py-[5px] text-[11px] rounded-xl bg-[#2a2121]">
                          Địa điểm
                        </h1> */}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="">
                  {Array.from({ length: count }).map((_, index) => (
                    <div
                      key={index}
                      className={`${
                        current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
                      } inline-block h-1 w-[calc(100%/6)]`}
                    />
                  ))}
                </div>
              </Carousel>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Lễ Phật Đản</AccordionTrigger>
            <AccordionContent>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-10 py-3 "
              >
                <CarouselContent>
                  {lephatdan.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
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
                <div className="w-full">
                  {Array.from({ length: count }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        current === index + 1 ? "bg-[#E2D398]" : "bg-[#716E6E]"
                      } inline-block h-1 w-1/2`}
                    />
                  ))}
                </div>
              </Carousel>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Giỗ Tổ Khai Sơn</AccordionTrigger>
            <AccordionContent>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-10 py-3 "
              >
                <CarouselContent>
                  {giothokhaison.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
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
                      } inline-block h-1 w-[calc(100%/6)]`}
                    />
                  ))}
                </div>
              </Carousel>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Lễ rằm tháng giêng</AccordionTrigger>
            <AccordionContent>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-10 py-3 "
              >
                <CarouselContent>
                  {leramthanggieng.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
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
                      } inline-block h-1 w-[calc(100%/2)]`}
                    />
                  ))}
                </div>
              </Carousel>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Lễ Thích Ca Mô Ni thành đạo</AccordionTrigger>
            <AccordionContent>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                }}
                className="w-full space-y-10 py-3 "
              >
                <CarouselContent>
                  {lengaythichcamothanhdao.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="relative basis-[75%] h-[300px] md:h-[400px] "
                    >
                      <div className="relative w-full bg-[#716E6E] h-full flex items-center justify-center">
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
                      } inline-block h-1 w-[calc(100%/2)]`}
                    />
                  ))}
                </div>
              </Carousel>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
