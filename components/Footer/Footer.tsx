import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="py-10 container border-t mt-10 flex flex-col items-center ">
      <h1 className="text-[30px] font-medium text-center">Đơn Vị Tài Trợ</h1>
      <div className="flex items-center justify-center ">
        <Image
          src="/assets/images/Watermark MHX2024.png"
          width={300}
          height={300}
          alt=""
        />
      </div>
    </div>
  );
}
