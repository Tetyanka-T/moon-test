"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import s from "./Join.module.scss";

const Join = () => {
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
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        <div className={s.join}>
          <h4 className={s.title}>Join our community</h4>
          <Image
            src="/moon.png"
            width={300}
            height={300}
            alt="moon"
            className={s.join_moon}
          />
          <p className={s.text}>
            Join us on our mission to to the moon & revolutionize open source AI
            development so that we can build a permissionless, democratized, and
            decentralized AI.
          </p>
          <p className={s.text}>
            Let the fate of AI be in our hands and not that of big tech
            companies.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Join;
