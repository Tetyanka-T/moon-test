import s from "./StatsBlock.module.scss";

const StatsBlock = () => {
  return (
    <ul className={s.stats_list}>
      <li className={s.stats_item}>
        <p className={s.stats_figure}>1,873</p>
        <p className={s.stats_text}>LLM models</p>
      </li>
      <li className={s.stats_item}>
        <p className={s.stats_figure}>$326,734</p>
        <p>Paid to data scientists</p>
      </li>
      <li className={s.stats_item}>
        <p className={s.stats_figure}>6,557</p>
        <p className={s.stats_text}>Developers</p>
      </li>
    </ul>
  );
};

export default StatsBlock;
