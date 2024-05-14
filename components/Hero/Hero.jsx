"use client";

import Button from "../Buttons/Button";
import ButtonWithBorder from "../Buttons/ButtonWithBorder";
import StatsBlock from "../StatsBlock/StatsBlock";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className="section">
      <h1 className={s.title}>
        A new economic primitive for funding decentralized AI
      </h1>
      <p className={s.text}>
        We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI
      </p>
      <div className={s.button_container}>
        <ButtonWithBorder font={24} text={"Buy Spice AI"} />
        <Button text={"Try Now"} font={24} />
      </div>
      {/* <StatsBlock /> */}
    </div>
  );
};

export default Hero;
