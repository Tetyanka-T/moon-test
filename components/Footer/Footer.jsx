import Image from "next/image";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
      <h4 className={s.footer_title}>Join our community and harvest $SALT</h4>
      <ul className={s.footer_list_text}>
        <li>How It Works</li>
        <li>Buy Salt AI</li>
      </ul>
      <ul className={s.footer_list}>
        <li className={s.footer_item}>
          <ul className={s.footer_item__list}>
            <li>
              <Image src="/leter.png" width="36" height="36" alt="leter" />
            </li>
            <li>
              <Image src="/logo.png" width="36" height="36" alt="logo" />
            </li>
          </ul>
        </li>
        <li className={s.footer_item}>
          <ul className={s.footer_item__list}>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
