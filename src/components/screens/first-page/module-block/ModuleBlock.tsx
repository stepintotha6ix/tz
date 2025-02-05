import { IProduct } from "@/components/shared/types/product.types";
import React, { FC, useState } from "react";
import styles from "./ModuleBlock.module.scss";
import classNames from "clsx"; // Optional: If you want to use `classnames` utility

export const ModuleBlock: FC<{ data: IProduct }> = ({ data }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openModule, setOpenModule] = useState<null | number>(null);

  // Check for mobile screen size
  const checkIsMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Event listener for resizing
  React.useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.modules}>
        {Array.isArray(data.specializedSubjects) &&
          data.specializedSubjects.map(
            (item: {
              id: number;
              skills?: { id: number; title: string }[];
            }) => {
              const skillsPart1 =
                item.skills?.slice(0, Math.ceil(item.skills.length / 2)) || [];
              const skillsPart2 =
                item.skills?.slice(Math.ceil(item.skills.length / 2)) || [];

              return (
                <div key={item.id} className={styles.skillsContainer}>
                  <div className={styles.skillsBlock}>
                    <h2
                      className={classNames(styles.moduleTitle, {
                        [styles.active]: openModule === 1,
                        [styles.inactive]: openModule !== 1,
                      })}
                      onClick={() =>
                        isMobile && setOpenModule(openModule === 1 ? null : 1)
                      }
                    >
                      {isMobile && (
                        <span className={styles.moduleIcon}>
                          {openModule === 1 ? "-" : "+"}
                        </span>
                      )}
                      1 модуль
                    </h2>
                    {isMobile && (
  <ul className={classNames(styles.skillsList, { [styles.open]: openModule === 1 })}>
    {skillsPart1.map((skill) => (
      <li key={skill.id}>{skill.title}</li>
    ))}
  </ul>
)}
                    {!isMobile && (
                      <ul className={styles.skillsList}>
                        {skillsPart1.map((skill) => (
                          <li key={skill.id}>{skill.title}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className={styles.skillsBlock}>
                    <h2
                      className={classNames(styles.moduleTitle, {
                        [styles.active]: openModule === 2,
                        [styles.inactive]: openModule !== 2,
                      })}
                      onClick={() =>
                        isMobile && setOpenModule(openModule === 2 ? null : 2)
                      }
                    >
                      {isMobile && (
                        <span className={styles.moduleIcon}>
                          {openModule === 2 ? "-" : "+"}
                        </span>
                      )}
                      2 модуль
                    </h2>
                    {isMobile && (
  <ul className={classNames(styles.skillsList, { [styles.open]: openModule === 2 })}>
    {skillsPart1.map((skill) => (
      <li key={skill.id}>{skill.title}</li>
    ))}
  </ul>
)}
                    {!isMobile && (
                      <ul className={styles.skillsList}>
                        {skillsPart2.map((skill) => (
                          <li key={skill.id}>{skill.title}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};
