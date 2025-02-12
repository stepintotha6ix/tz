import { IBots } from "@/components/shared/types/data.interface";
import { selectFilter, updateFilter } from "@/store/time/time.slice";
import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Bots.module.scss";
import bot1 from "@/assets/images/Bots/bot1.png";
import bot2 from "@/assets/images/Bots/bot2.png";
import bot3 from "@/assets/images/Bots/bot3.png";
import bot4 from "@/assets/images/Bots/bot4.png";
import bot5 from "@/assets/images/Bots/bot5.png";
import bot6 from "@/assets/images/Bots/bot6.png";
import Image from "next/image";
const botImages = [bot1, bot2, bot3, bot4, bot5, bot6];

const Bots: FC<{ data: IBots[] }> = ({ data }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter); // Получаем текущий фильтр

  // Фильтрация данных в зависимости от выбранного периода
  const filteredData = data.map((bot) => ({
    ...bot,
    value:
      filter === "allTime"
        ? bot.all_time
        : filter === "7d"
        ? bot["7d"]
        : filter === "30d"
        ? bot["30d"]
        : bot["24h"],
  }));

  return (
    <div className="flex">
      <div className={styles.bots}>
        {filteredData.map((bot, index) => (
          <div key={index} className={styles.bot}>
            <Image
              src={botImages[index]}
              alt={bot.name}
              width={50}
              height={50}
            />
            <p>{bot.value}%</p>
          </div>
        ))}
      </div>
      <div className={styles.timeButtons}>
        <div className={styles.title}>Time range:</div>
     
        <button className={styles.button} onClick={() => dispatch(updateFilter({ value: "24h" }))}>
          24h
        </button>
     
        <button className={styles.button} onClick={() => dispatch(updateFilter({ value: "7d" }))}>
          7d
        </button>
        
        <button className={styles.button} onClick={() => dispatch(updateFilter({ value: "30d" }))}>
          30d
        </button>
        <button className={styles.button} onClick={() => dispatch(updateFilter({ value: "allTime" }))}>
          All Time
        </button>
      </div>
    </div>
  );
};

export default Bots;
