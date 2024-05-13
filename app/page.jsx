import Header from "@/components/Header/Header";
import s from "../styles/common.module.scss";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import StatsBlock from "@/components/StatsBlock/StatsBlock";
import Integrations from "@/components/Integrations/Integrations";
import Crowdsourc from "@/components/Crowdsourc/Crowdsourc";

export default function Home() {
  return (
    <>
      <Header />
      <main className={s.container}>
        <Hero />
        <StatsBlock />
        <Integrations />
        <Crowdsourc />
      </main>
    </>
  );
}
