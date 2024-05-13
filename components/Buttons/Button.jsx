import s from "./Buttons.module.scss";

const Button = ({ text, font }) => {
  const buttonStyles = {
    fontSize: font,
  };
  return (
    <button className={s.button} style={buttonStyles}>{text}</button>
  );
};

export default Button;
