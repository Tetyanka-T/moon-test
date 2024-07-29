import s from "../../styles/common.module.scss";
import ButtonWithBorder from "../Buttons/ButtonWithBorder";

const Table = () => {
  return (
    <div className={s.container}>
      <h1>LLM Leaderboard</h1>
      <ButtonWithBorder text="Submit your model" font={24} />
      <p>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </p>
      <div className="example-wrapper">
        <div style={{ marginBottom: "5px" }}>
          <button onClick={() => fillLarge()}>Fill 100%</button>
          <button onClick={() => fillMedium()}>Fill 60%</button>
          <button onClick={() => fillExact()}>Exactly 400 x 400 pixels</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
