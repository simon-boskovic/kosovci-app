import styles from "@/styles/Tour.module.scss";
import EventList from "./EventList";
import { useEffect } from "react";

export interface IEvent {
  date: string;
  day: string;
  place: string;
  description: string;
  hasVacation: boolean;
  link: string;
}

export interface IMonthEvents {
  month: string;
  events: IEvent[];
}

export interface IYearEvents {
  [year: string]: IMonthEvents[];
}

export default function Tour(props: { tour: IYearEvents }) {
  const { tour } = props;
  return (
    <div>
      <div className={styles["c-tour-heading"]} id="kde-hrajeme">
        <h2>Kde hrajeme</h2>
      </div>
      {Object.keys(tour).map((year) => {
        return tour[year].map((tourItem, index) => (
          <div key={index} className={styles["c-tour-items-wrapper"]}>
            <div>
              {tourItem.month === "Leden" && (
                <div className={styles["c-tour-year"]}>
                  <h2>{year}</h2>
                </div>
              )}

              <div className={styles["c-tour-month"]}>
                <h3>{tourItem.month}</h3>
              </div>
              <div className={styles["c-tour-items"]}>
                <EventList events={tourItem.events} />
              </div>
            </div>
          </div>
        ));
      })}
    </div>
  );
}
