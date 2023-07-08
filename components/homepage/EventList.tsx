"use client";

import { IEvent } from "./Tour";
import Image from "next/image";
import styles from "@/styles/EventList.module.scss";

interface IEventListProps {
  events: IEvent[] | undefined;
  closesEventIndex?: number | undefined;
}

export default function EventList({
  events,
  closesEventIndex,
}: IEventListProps) {
  const facebookIconpath = "images/links/facebook.svg";

  return (
    <div className={styles["c-events"]}>
      {events?.map((event, index) => (
        <div
          key={index}
          className={`${styles["c-event-item"]} ${
            index === closesEventIndex && styles["c-event-item--nearest"]
          }`}
        >
          <div className={styles["c-tour-item"]}>
            {event.day} {event.date}
            <strong>{` ${event.place}`}</strong>
            <div>
              <span>{`${event.description || ""} `}</span>
            </div>
          </div>
          <Image
            onClick={() => window.open("https://www.seznam.cz", "_blank")}
            src={facebookIconpath}
            style={{ cursor: "pointer", marginLeft: "1rem" }}
            height={21}
            width={21}
            alt="Facebook link"
          />
        </div>
      ))}
    </div>
  );
}
