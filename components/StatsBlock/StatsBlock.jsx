"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import s from "./StatsBlock.module.scss";

const StatsBlock = () => {
  const ref = useRef(null);
  const isinView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isinView) {
      mainControls.start("visible");
    }
  }, [isinView, mainControls]);
  return (
    <div ref={ref} className={s.container_stats}>
      <ul className={s.stats_list}>
        <li>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 130 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.25 }}
            className={s.stats_item}
          >
            <p className={s.stats_figure}>1,873</p>
            <p className={s.stats_text}>LLM models</p>
          </motion.div>
        </li>
        <li>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 140 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.35 }}
            className={s.stats_item}
          >
            <p className={s.stats_figure}>$326,734</p>
            <p>Paid to data scientists</p>
          </motion.div>
        </li>
        <li>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 150 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.45 }}
            className={s.stats_item}
          >
            <p className={s.stats_figure}>6,557</p>
            <p className={s.stats_text}>Developers</p>
          </motion.div>
        </li>
      </ul>
    </div>
  );
};

export default StatsBlock;
