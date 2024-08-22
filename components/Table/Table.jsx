"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonWithBorder from "../Buttons/ButtonWithBorder";
import { Up, Down, Dash, ButtonDown, ButtonUp } from "../svg";
import style from "../../styles/common.module.scss";
import s from "./Table.module.scss";

const Table = () => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  const onScroll = () => {
    router.push("/#table");
    setShowMore(false);
  };
  return (
    <div className={style.container}>
      <div className={s.wrapper_title}>
        <h1 className={s.title}>LLM Leaderboard</h1>
        <ButtonWithBorder text="Submit your model" font={24} />
      </div>

      <p className={s.text}>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks.
      </p>
      <p className={s.text}>The higher the score, the better the LLM.</p>
      <div className={s.table_wrapper}>
        <table className={s.table}>
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th>Model Name</th>
              <th>Average</th>
              <th>ARC</th>
              <th>HellaSwag</th>
              <th>MMLU</th>
              <th>TruthfulQA</th>
              <th>Winogrande</th>
              <th>GSM8K</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Dash />
              </td>
              <td>1</td>
              <td>davidkim205/Rhea-72b-v0.5</td>
              <td>81.22</td>
              <td>79.78</td>
              <td>91.15</td>
              <td>77.95</td>
              <td>74.50</td>
              <td>87.85</td>
              <td>76.12</td>
              <td>1,384,193</td>
            </tr>
            <tr id="table">
              <td>
                <Up />
              </td>
              <td>2</td>
              <td>MTSAIR/MultiVerse_70B</td>
              <td>81.00</td>
              <td>78.67</td>
              <td>89.77</td>
              <td>78.22</td>
              <td>75.18</td>
              <td>87.53</td>
              <td>76.65</td>
              <td>1,319,156</td>
            </tr>
            <tr>
              <td>
                <Dash />
              </td>
              <td>3</td>
              <td>SF-Foundation/Ein-72B-v0.11</td>
              <td>81.00</td>
              <td>78.67</td>
              <td>89.77</td>
              <td>78.22</td>
              <td>75.18</td>
              <td>87.53</td>
              <td>76.65</td>
              <td>1,298,529</td>
            </tr>
            <tr>
              <td>
                <Up />
              </td>
              <td>4</td>
              <td>abacusai/Smaug-72B-v0.1</td>
              <td>81.00</td>
              <td>78.67</td>
              <td>89.77</td>
              <td>78.22</td>
              <td>75.18</td>
              <td>87.53</td>
              <td>76.65</td>
              <td>1,255,720</td>
            </tr>
            <tr>
              <td>
                <Down />
              </td>
              <td>5</td>
              <td>ibivibiv/alpaca-dragon-72b-v1</td>
              <td>81.00</td>
              <td>78.67</td>
              <td>89.77</td>
              <td>78.22</td>
              <td>75.18</td>
              <td>87.53</td>
              <td>76.65</td>
              <td>1,239,060</td>
            </tr>
            <tr>
              <td>
                <Dash />
              </td>
              <td>6</td>
              <td>mistralai/Mixtral-8x22B-Instruct-v0.1</td>
              <td>81.00</td>
              <td>78.67</td>
              <td>89.77</td>
              <td>78.22</td>
              <td>75.18</td>
              <td>87.53</td>
              <td>76.65</td>
              <td>1,208,482</td>
            </tr>
            <tr>
              <td>
                <Up />
              </td>
              <td>7</td>
              <td>moreh/MoMo-72B-lora-1.8.7-DPO</td>
              <td>81.00</td>
              <td>78.67</td>
              <td>89.77</td>
              <td>78.22</td>
              <td>75.18</td>
              <td>87.53</td>
              <td>76.65</td>
              <td>1,205,577</td>
            </tr>
            <tr>
              <td>
                <Up />
              </td>
              <td>8</td>
              <td>cloudyu/TomGrc_FusionNet_34Bx2_MoE_v0.1_DPO_f16</td>
              <td>81.00</td>
              <td>78.67</td>
              <td>89.77</td>
              <td>78.22</td>
              <td>75.18</td>
              <td>87.53</td>
              <td>76.65</td>
              <td>1,199,621</td>
            </tr>
          </tbody>
        </table>

        {showMore && (
          <table className={s.table}>
            <tbody>
              <tr>
                <td>
                  <Down />
                </td>
                <td>9</td>
                <td>meta-llama/Meta-Llama-3-70B-Instruct</td>
                <td>81.22</td>
                <td>79.78</td>
                <td>91.15</td>
                <td>77.95</td>
                <td>74.50</td>
                <td>87.85</td>
                <td>76.12</td>
                <td>1,190,580</td>
              </tr>
              <tr>
                <td>
                  <Dash />
                </td>
                <td>10</td>
                <td>saltlux/luxia-21.4b-alignment</td>
                <td>81.00</td>
                <td>78.67</td>
                <td>89.77</td>
                <td>78.22</td>
                <td>75.18</td>
                <td>87.53</td>
                <td>76.65</td>
                <td>1,185,234</td>
              </tr>
              <tr>
                <td>
                  <Up />
                </td>
                <td>11</td>
                <td>zhengr/MixTAO-7Bx2-MoE-</td>
                <td>81.00</td>
                <td>78.67</td>
                <td>89.77</td>
                <td>78.22</td>
                <td>75.18</td>
                <td>87.53</td>
                <td>76.65</td>
                <td>1,178,889</td>
              </tr>
              <tr>
                <td>
                  <Down />
                </td>
                <td>12</td>
                <td>yunconglong/Truthful_DPO_TomGrc_Fusion_7Bx2_Mo</td>
                <td>81.00</td>
                <td>78.67</td>
                <td>89.77</td>
                <td>78.22</td>
                <td>75.18</td>
                <td>87.53</td>
                <td>76.65</td>
                <td>1,177,065</td>
              </tr>
              <tr>
                <td>
                  <Dash />
                </td>
                <td>13</td>
                <td>JaeyeonKang/CCK_Asura_v1</td>
                <td>81.00</td>
                <td>78.67</td>
                <td>89.77</td>
                <td>78.22</td>
                <td>75.18</td>
                <td>87.53</td>
                <td>76.65</td>
                <td>1,170,954</td>
              </tr>
              <tr>
                <td>
                  <Down />
                </td>
                <td>14</td>
                <td>fblgit/UNA-SimpleSmaug-34b-v1beta</td>
                <td>81.00</td>
                <td>78.67</td>
                <td>89.77</td>
                <td>78.22</td>
                <td>75.18</td>
                <td>87.53</td>
                <td>76.65</td>
                <td>1,162,959</td>
              </tr>
              <tr>
                <td>
                  <Up />
                </td>
                <td>15</td>
                <td>TomGrc/FusionNet_34Bx2_MoE_v0.1</td>
                <td>81.00</td>
                <td>78.67</td>
                <td>89.77</td>
                <td>78.22</td>
                <td>75.18</td>
                <td>87.53</td>
                <td>76.65</td>
                <td>1,144,223</td>
              </tr>
              <tr>
                <td>
                  <Dash />
                </td>
                <td>16</td>
                <td>cloudyu/TomGrc_FusionNet_34Bx2_MoE_v0.1_DPO6</td>
                <td>81.00</td>
                <td>78.67</td>
                <td>89.77</td>
                <td>78.22</td>
                <td>75.18</td>
                <td>87.53</td>
                <td>76.65</td>
                <td>1,129,110</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      {!showMore && (
        <button className={s.button_down} onClick={() => setShowMore(true)}>
          <ButtonDown />
        </button>
      )}
      {showMore && (
        <div className={s.button_up__container}>
          <p>View full leaderboard</p>
          <button className={s.button_up} onClick={() => onScroll()}>
            <ButtonUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
