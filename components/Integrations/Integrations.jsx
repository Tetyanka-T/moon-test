import Image from "next/image";
import s from "./Integrations.module.scss";

const Integrations = () => {
  return (
    <div className={s.section}>
      <h3 className={s.text}>
        Projects integrated into the Arrakis AI Ecosystem
      </h3>
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
    </div>
  );
};

export default Integrations;
