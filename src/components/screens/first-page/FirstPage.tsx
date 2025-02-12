"use client";
import React, { FC } from "react";
import styles from "./FirstPage.module.scss";
import data from "@/data/data.min.json";
import Header from "./header/Header";
import Bots from "./bots/Bots";
import Graph from "./graph/Graph";
const FirstPage: FC = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <Header data={data} />
        <Graph />
        <Bots data={data.bots} />
      </div>
    </div>
  );
};

export default FirstPage;
