import React, { FC } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import burgerIcon from "@/assets/images/Title_bar/menu_icon.png";
import dashBoardIcon from "@/assets/images/Title_bar/dashboard.png";
import refresh from "@/assets/images/Title_bar/refresh.png";
import { IData } from "@/components/shared/types/data.interface";
const Header: FC<{ data: IData }> = ({ data }) => {
  return (
    <div className={styles.header}>
      <div className={styles.topBlock}>
        <Image src={burgerIcon} width={25} height={20} alt="" />
        <Image src={dashBoardIcon} width={120} height={20} alt="" />
        <Image src={refresh} width={30} height={30} alt="" />
      </div>
      <div className={styles.bottomBlock}>
        <p className={styles.capitalTitle}>
          TRADING CAPITAL: <p className={styles.capital}>{data.trading_capital} BTC</p>
        </p>
        <div className={styles.rightBlock}>
          <p className={styles.balance}>
            BALANCE: <b >{data.balance}</b>
          </p>
          <p className={styles.onHold}>
            ON HOLD: <b >{data.on_hold}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
