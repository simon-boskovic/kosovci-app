import EventList from "@/components/homepage/EventList";
import { IEvent, IYearEvents } from "./Tour";
const monthsDictionary: { [key: string]: string } = {
  "0": "Leden",
  "1": "Únor",
  "2": "Březen",
  "3": "Duben",
  "4": "Květen",
  "5": "Červen",
  "6": "Červenec",
  "7": "Srpen",
  "8": "Září",
  "9": "Říjen",
  "10": "Listopad",
  "11": "Prosinec",
};

export default function NearestEvents(props: { tour: IYearEvents }) {
  let events: IEvent[] | undefined = [];
  let closesEventIndex: number | undefined;

  const getCurrentMonthEvents = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth: string = monthsDictionary[date.getMonth()];

    const currentMonthEvents = props.tour[currentYear].find(
      (item) => item.month === currentMonth
    )?.events;

    return currentMonthEvents;
  };
  const getClosestEventIndex = (events: IEvent[] | undefined) => {
    if (events) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      const today = date.getTime();

      let nearestEventIndex = -1;
      let nearestEventDate = Infinity;

      for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const eventDate = new Date(
          event.date.split(".").reverse().join(".")
        ).getTime();
        if (eventDate >= today && eventDate < nearestEventDate) {
          nearestEventIndex = i;
          nearestEventDate = eventDate;
        }
      }

      if (nearestEventIndex !== -1) {
        return nearestEventIndex;
      }
    }

    return undefined;
  };

  events = getCurrentMonthEvents();
  closesEventIndex = getClosestEventIndex(events);

  return (
    <div>
      <div style={{ textAlign: "center" }} id="nejblizsi-akce">
        <h2>Nejbližší akce</h2>
      </div>
      <EventList events={events} closesEventIndex={closesEventIndex} />
    </div>
  );
}
