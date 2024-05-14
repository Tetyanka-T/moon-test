import Header from "@/components/Header/Header";
import s from "../styles/common.module.scss";
import Hero from "@/components/Hero/Hero";
import StatsBlock from "@/components/StatsBlock/StatsBlock";
import Integrations from "@/components/Integrations/Integrations";
import Crowdsourc from "@/components/Crowdsourc/Crowdsourc";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <Banner>
      <Header />
      <main className={s.container}>
        <Hero />
        <StatsBlock />
        <Integrations />
        <Crowdsourc />
      </main>
    </Banner>
  );
}
