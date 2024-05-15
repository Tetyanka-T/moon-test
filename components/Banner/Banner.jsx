"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import s from "./Banner.module.scss";

const Banner = ({ children }) => {
  return (
    <div className={s.banner}>
      <div className={s.spot_top}></div>
      <div className={s.spot_bottom}></div>
      <Parallax pages={2.6}>
        <ParallaxLayer offset={0} speed={-0.8} className={s.moon} />
        <ParallaxLayer speed={0.8} factor={1}>
          {children}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Banner;
