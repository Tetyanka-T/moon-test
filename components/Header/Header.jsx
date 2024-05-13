import ButtonWithBorder from "../Buttons/ButtonWithBorder";
import Button from "../Buttons/Button";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <ul className={s.menu_list}>
        <li>
          <Button text={"LLM Leaderboard"} font={18}></Button>
        </li>
        <li>
          <ButtonWithBorder font={18} text={"Buy Spice AI"} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
