"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./ui/EmblaCarouselArrowButtons";
const images = [
  { image: "/assets/images/traoqua/1.jpg" },
  { image: "/assets/images/traoqua/2.jpg" },
  { image: "/assets/images/traoqua/3.jpg" },
  { image: "/assets/images/traoqua/4.jpg" },
  { image: "/assets/images/traoqua/5.jpg" },
  { image: "/assets/images/traoqua/6.jpg" },
  { image: "/assets/images/traoqua/7.jpg" },
  { image: "/assets/images/traoqua/8.jpg" },
  { image: "/assets/images/traoqua/9.jpg" },
  { image: "/assets/images/traoqua/10.jpg" },
  { image: "/assets/images/traoqua/11.jpg" },
  { image: "/assets/images/traoqua/12.jpg" },
  { image: "/assets/images/traoqua/13.jpg" },
  { image: "/assets/images/traoqua/14.jpg" },
  { image: "/assets/images/traoqua/15.jpg" },
  { image: "/assets/images/traoqua/16.jpg" },
  { image: "/assets/images/traoqua/17.jpg" },
  { image: "/assets/images/traoqua/18.jpg" },
  { image: "/assets/images/traoqua/19.jpg" },
  { image: "/assets/images/traoqua/20.jpg" },
  { image: "/assets/images/traoqua/21.jpg" },
];
const TWEEN_FACTOR_BASE = 0.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const TraoQua = () => {
  const options: EmblaOptionsType = { loop: false };
  const slides = images;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <section className=" pt-20 pb-10 md:max-w-[70%] md:mx-auto" id="featured">
      <h1 className="text-white text-[22px] text-center px-10 py-5">
        Trao tặng quà cho 700 hộ gia đình có hoàn cảnh khó khăn nhân dịp chào
        đón năm mới
      </h1>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((item, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <Image
                    src={item.image}
                    width={5000}
                    height={5000}
                    alt=""
                    className=" object-cover object-center "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TraoQua;
