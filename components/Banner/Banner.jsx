"use client";
import { useRef } from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import s from "./Banner.module.scss";

const Banner = ({ children }) => {
  return (
    <div className={s.banner}>
      <div className={s.spot_top}></div>
      <div className={s.spot_bottom}></div>
      {/* <Parallax speed={5}> */}
      <Image
        src="/hero-moon.png"
        width={200}
        height={200}
        alt=""
        className={s.moon}
      />
      {/* </Parallax> */}

      {children}
    </div>
  );
};

export default Banner;
