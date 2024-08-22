"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import s from "./Banner.module.scss";
import Join from "../Join/Join";
import Footer from "../Footer/Footer";
import Table from "../Table/Table";
import style from "../../styles/common.module.scss";
const Banner = ({ children }) => {
  return (
    <div className={s.banner}>
      <div className={s.spot_top}></div>
      <div className={s.spot_bottom}></div>
      <Parallax pages={4.2}>
        <ParallaxLayer speed={-0.3} className={s.moon} factor={1} />
        <ParallaxLayer speed={0.8} factor={1} offset={0}>
          {children}
        </ParallaxLayer>

        <ParallaxLayer speed={0.8} offset={2} factor={1}>
          <Table />
        </ParallaxLayer>
        <ParallaxLayer speed={0.9} offset={3.1} factor={1}>
          <Join />
        </ParallaxLayer>

        <ParallaxLayer speed={0.4} offset={3.5} factor={1}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Banner;
