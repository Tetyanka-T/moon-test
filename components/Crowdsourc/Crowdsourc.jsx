import ButtonWithBorder from "../Buttons/ButtonWithBorder";
import s from "./Crowdsourc.module.scss";

const Crowdsourc = () => {
  return (
    <div className={s.section}>
      <h3 className={s.title}>
        Crowdsourcing our collective intelligence to build the best AI
      </h3>
      <p className={s.text}>
        Open source AI has been lagging behind the likes of Google and OpenAI by
        billions of dollars.
      </p>
      <p className={s.text}>
        Salt aims to solve that by rewarding open source developers who
        contribute to the democratization of AI. We run competitions between AI
        models to find and reward the best AI models. As a result, our users
        will be able to access the latest cutting edge AI models.
      </p>
      <ButtonWithBorder text={"Use The Cutting Edge AI"} font={24} />
    </div>
  );
};

export default Crowdsourc;
