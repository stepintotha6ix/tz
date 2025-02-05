"use client";
import React, { FC } from "react";
import styles from "./FirstPage.module.scss";
import { useData } from "./useData";
import { ModuleBlock } from "./module-block/ModuleBlock";
import { IProduct } from "@/components/shared/types/product.types";
const FirstPage: FC = () => {
  const { data, isLoading } = useData();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Специализированные дисциплины</h1>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        data?.map((item: IProduct) => <ModuleBlock key={item.id} data={item} />)
      )}
      <div className={styles.colorBoxes}>
        <div className={styles.redBox}>
          <h1>Практические модули</h1>
          <p>
            Работа над собственными проектами: практика групповых
            взаимодействий, кейс-методы, эссе
          </p>
        </div>
        <div className={styles.blackBox}>
          <h1>Итоговая аттестация</h1>
          <ul>
            {" "}
            <li>
              Бизнес-проектирование (подготовка итоговой аттестационной работы,
              консультирование по бизнес-проектированию)
            </li>
            <li>Защита итоговой аттестационной работы</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
