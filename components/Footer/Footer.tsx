import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="py-10 container border-t mt-10 flex flex-col items-center gap-5">
      <h1 className="text-[30px] font-medium text-center">Đơn Vị Tài Trợ</h1>
      <div className="flex items-center justify-center gap-5">
        <Image src="/assets/images/UEL.png" width={100} height={100} alt="" />
        <Image
          src="/assets/images/logomhx.webp"
          width={100}
          height={100}
          alt=""
        />
      </div>
    </div>
  );
}
