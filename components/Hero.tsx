import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col text-white w-full h-[100vh]  overflow-hidden  ">
      <Image
        src="/assets/images/banner.jpg"
        width={5000}
        height={5000}
        alt=""
        className=" object-cover object-center w-full h-[100vh]"
      />
      <div className=" container absolute top-[20%] md:text-center md:space-y-5">
        <h1 className="text-[45px] font-thin md:text-[60px]">Chùa Hội Sơn</h1>
        <p className="pr-20 text-[18px] ml-1 md:text-[22px] md:pr-0">
          DI TÍCH KIẾN TRÚC NGHỆ THUẬT QUỐC GIA
        </p>
        <div className="mt-3 flex items-center px-4 gap-4 rounded-[40px] border w-fit py-2 backdrop-blur-md md:mx-auto">
          <svg
            width="26"
            height="26"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <circle
                id="Ellipse 2"
                cx="11.5"
                cy="11.5"
                r="10.6962"
                stroke="white"
              />
              <path
                id="Vector"
                d="M11.5144 17.6066L15.0714 8.15086L5.20215 10.3096L7.6569 13.1473L13.1534 9.81008L9.05962 14.7689L11.5144 17.6066Z"
                fill="#E2D398"
              />
            </g>
          </svg>
          <Link href="#review" className="text-[14px] md:text-[18px] ">
            Xem chi tiết
          </Link>
        </div>
      </div>
      <div className="absolute right-0 bottom-5   flex flex-col items-center gap-8 ">
        <svg
          width="2"
          height="67"
          viewBox="0 0 2 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="line" d="M1 0L1 67" stroke="white" />
        </svg>
        <p className=" -rotate-90">Scroll</p>
        <svg
          width="2"
          height="67"
          viewBox="0 0 2 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="line" d="M1 0L1 67" stroke="white" />
        </svg>
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.60596e-08 0.824947C0.00295451 0.60752 0.0870743 0.39905 0.235846 0.240461C0.391376 0.0864182 0.601429 7.60516e-07 0.820332 7.50947e-07C1.03924 7.41379e-07 1.24929 0.0864181 1.40482 0.240461L9.02365 7.86954L16.6425 0.240461C16.8019 0.109648 17.0042 0.0427973 17.2102 0.0529121C17.4161 0.0630268 17.6109 0.149384 17.7567 0.295185C17.9025 0.440987 17.9889 0.635808 17.999 0.841754C18.0091 1.0477 17.9423 1.25005 17.8115 1.40943L9.60813 9.61275C9.45261 9.76679 9.24255 9.85321 9.02365 9.85321C8.80475 9.85321 8.59469 9.76679 8.43916 9.61275L0.235846 1.40943C0.0870743 1.25084 0.00295453 1.04237 3.60596e-08 0.824947Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
