import s from "./Buttons.module.scss";

const ButtonWithBorder = ({ text, font }) => {
  const buttonStyles = {
    fontSize: font,
  };

  return (
    <button className={s.button_withborder} style={buttonStyles}>
      {text}
    </button>
  );
};

export default ButtonWithBorder;
