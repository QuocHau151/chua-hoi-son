"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Link from "next/link";
function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  return (
    <nav
      className="border-white fixed top-5 z-50 w-[90vw] left-[50%] translate-x-[-50%] flex items-start flex-col  py-3  backdrop-blur-lg border-[1px] text-white rounded-lg "
      ref={scope}
    >
      <motion.button
        className=" w-full flex items-center justify-between  px-2 "
        whileTap={{ scale: 0.97 }}
      >
        Danh Mục
        {!isOpen ? (
          <RiMenu3Fill
            className="text-[20px]"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <MdClose className="text-[20px]" onClick={() => setIsOpen(!isOpen)} />
        )}
      </motion.button>
      <ul
        className={` ${
          isOpen ? "block" : "hidden"
        } w-full mt-2 border-t pt-4 space-y-3 px-2`}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        <li>
          <Link href="#review" onClick={() => setIsOpen(!isOpen)}>
            Giới thiệu
          </Link>
        </li>
        <li>
          <Link href="#featured" onClick={() => setIsOpen(!isOpen)}>
            Các kiến trúc nổi bật
          </Link>
        </li>
        <li>
          <Link href="#holiday" onClick={() => setIsOpen(!isOpen)}>
            Các ngày lễ quan trọng
          </Link>
        </li>
      </ul>
    </nav>
  );
}
const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
