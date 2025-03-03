import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

function Experience() {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>
                    {`${historyItem.role}, ${historyItem.organisation}`}{" "}
                    <a
                      href={`${historyItem.Certificate}`}
                      target="_blank"
                      style={{
                        fontSize: "19px",
                        paddingLeft: "5px",
                        listStyle: "none",
                        textDecoration: "none",
                        color: "red",
                      }}
                    >
                      Certificate
                    </a>
                  </h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
