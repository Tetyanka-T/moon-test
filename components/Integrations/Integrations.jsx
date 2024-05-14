"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import s from "./Integrations.module.scss";

const Integrations = () => {
  const ref = useRef(null);
  const isinView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isinView) {
      mainControls.start("visible");
    }
  }, [isinView, mainControls]);

  return (
    <div className="section" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.3 }}
        className={s.text}
      >
        <h3>Projects integrated into the Arrakis AI Ecosystem</h3>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <ul className={s.integrations_list}>
          <li>
            <Image src="/proj1.png" width={334} height={50} alt="" />
          </li>
          <li>
            <Image src="/proj2.png" width={421} height={100} alt="" />
          </li>
          <li>
            <Image src="/proj3.png" width={328} height={58} alt="" />
          </li>
          <li>
            <Image src="/proj4.png" width={102} height={102} alt="" />
          </li>
          <li>
            <Image src="/proj5.png" width={102} height={102} alt="" />
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Integrations;
