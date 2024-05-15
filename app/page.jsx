import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Integrations from "@/components/Integrations/Integrations";
import Crowdsourc from "@/components/Crowdsourc/Crowdsourc";
import Banner from "@/components/Banner/Banner";
import s from "../styles/common.module.scss";

export default function Home() {
  return (
    <Banner>
      <Header />
      <main className={s.container}>
        <Hero />
        <Integrations />
        <Crowdsourc />
      </main>
    </Banner>
  );
}
