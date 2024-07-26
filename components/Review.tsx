/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { FiChevronsDown } from "react-icons/fi";
export default function Review() {
  const [hidden, setHidden] = useState(true);
  return (
    <section className="pt-20 container " id="review">
      <h1 className="text-white text-[30px] text-center px-14 pt-5 ">
        Giới thiệu về <br /> Chùa Hội Sơn
      </h1>
      <div
        className={`"  space-y-4 text-white text-justify text-[13px] overflow-hidden  relative w-full" ${
          hidden ? "h-[350px]" : "h-auto"
        }`}
      >
        <div
          className={`" absolute bottom-0 right-[50%]  items-center justify-center translate-x-[50%] h-[150px] backdrop-blur-  w-full bg-gradient-to-t from-stone-900 rounded-b-2xl" ${
            !hidden ? "hidden" : "flex"
          }`}
        >
          <div
            className="font-semibold text-[20px] mt-20 text-[#E2D398] flex items-center justify-center gap-2"
            onClick={() => setHidden(false)}
          >
            Đọc thêm
            <FiChevronsDown />
          </div>
        </div>
        <p className="">
          Chùa Hội Sơn tọa lạc số 1A1 đường Nguyễn Xiễn, phường Long Bình, quận
          9,thành phố Hồ Chí Minh. Bộ trưởng Bộ Văn hóa đã ký quyết định số 43
          VH/QĐ ngày 7/1/1993 xếp hạng là di tích kiến trúc nghệ thuật cấp quốc
          gia.
        </p>
        <p>
          Sách Đại Nam Nhất Thống Chí ghi rõ: "Chùa hội sơn ở phường Long Tuy,
          huyện Long Thành là nơi thiền sư Khánh Long hóa thân" 
        </p>
        <p>
          Sách Gia Định Thành Thông Chí ghi: "Ở dưới hòn núi này (núi Châu Thới)
          về phía Bắc nứt ra 1 nứt ra một chi chạy đến địa phận thôn Long Tuy,
          rồi nổi lên gò cao bằng phẳng rộng rãi, ở bên núi có hang hố và khe
          nước, dân núi ở quanh theo, trên có chùa Hội Sơn là nơi Thiền sư Khánh
          Long tạo lập để tu hành, ngó xuống Đại Giang (sông Đồng Nai) hành
          khách leo lên du ngoạn có cảm tưởng tiêu dao ngoài cõi tục"
        </p>
        <p>
          Cũng theo sách này, năm 1815, phường Long Tuy thuộc tổng Long Vĩnh,
          huyện Long Thành, trấn Biên Hòa, thành Gia Định.
        </p>
        <p>
          Từ căn cứ trên, có thể xác định chùa Hội Sơn do Thiền sư Khanh Long
          đời thứ 38 phái lâm tế tạo dựng, thiền sư tu hành và viên tịch tại
          đây.
        </p>
        <p>
          Chùa Hội Sơn không những là địa điểm tín ngưỡng phật giáo, mà còn là
          quần thể danh thắng tuyệt mỹ, là di chỉ khảo cổ, được du khách trong
          và ngoài nước biết đến, tại chùa còn lưu giữ một số lưỡi rìu đá tứ
          diện (4 mặt) có vai và không có vai, các mảnh gốm sành kiểu chai
          lọ,... được phát hiện trong lúc trùng tu chùa, có niên đại từ
          1.000-4.000 năm cách ngày nay, thuộc nền văn hóa tiền sử lưu vực sông
          Đồng Nai.
        </p>
        <p>
          Hội Sơn là ngôi chùa có kiến trúc nghệ thuật tiêu biểu ở Nam bộ, bằng
          các dãy nhà bằng vật liệu gồ quý là: tiền điện, chánh điện, hậu tổ và
          khai sơn đường, 4 dãy nhà này nằm trên 1 trục dọc, mái lợp ngói âm
          dương. Tại chùa có các bức hoành, liển, đối long vị, tượng phật, án
          thờ gỗ có giá trị nghệ thuật như: "Hội Sơn tự", "đại hùng bửu điện",
          “tổ ấn trùng quan”, “tông phong vĩnh chấn" và "vạn đức hồng danh" do
          vua Khải Định ban tặng. Các vị tổ nối thừa tổ Khánh Long, là tổ Liễu
          Ngữ - Quảng Văn, tổ Trừng Tùng - Chơn Truyền, to Tầm Minh - Huệ Tấn,
          tổ Pháp Ấn - Như Quới, sư trưởng Thích Nữ Như Thanh - Hồng Ẩn, ni sư
          Thích Nữ Như Tiên, hoà thượng Thượng Nhật Hạ Quang - Thiện Trí, hòa
          thượng Thích Nhật Phát, và ngày 28 tháng 8 năm 1993 Thành Hội Phật
          giáo Thanh phố Hồ Chí Minh đã trao quyết định trụ trì số 555 QĐ/THPG
          cho thượng tọa Thích Thiện Hảo.
        </p>
        <p>
          Do biến cố của thời gian và sự vô thường, ngày 17 tháng 7 năm 2012 cơn
          hỏa hoạn đã thiêu cháy đi toàn bộ chánh điện. Chùa Hội Sơn đã được các
          ban, ngành, sở, bộ, Hội Kiến trúc sư Thành phố Hồ Chí Minh thiết kế
          phục dựng lại tổng thể khu di tích Chùa Hội Sơn, được tiến hành khải
          kiến trùng tu ngày mùng 4 tháng 4 năm Ất Mùi.
        </p>
        <p>
          Xa xa dưới chân đồi, còn hiển hiện những tàng cây cổ thụ, văng vẳng
          từng hồi chuông ngân, hòa nhịp trời nước mênh mông trên dòng sông Đồng
          Nai hiển hóa, khiến cho những ai đã một lần đến nơi đây, lòng vẫn cảm
          hoài ân đức các bậc tiền bối tổ sư.
        </p>
      </div>
    </section>
  );
}
