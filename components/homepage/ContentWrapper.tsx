"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Tour, { IYearEvents } from "./Tour";
import Contact from "./Contact";
import AboutBand from "./AboutBand";

export default function ContentWrapper(props: { tour: IYearEvents }) {
  const tourSection = <Tour tour={props.tour} />;

  const [section, setActiveSection] = useState(tourSection);

  const activeSectionHandler: { [key: string]: JSX.Element } = {
    ["kde-hrajeme"]: <Tour tour={props.tour} />,
    ["kontakt"]: <Contact />,
    ["o-kapele"]: <AboutBand />,
  };
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.split("#")[1];
    const section = activeSectionHandler[hash];
    if (hash && section) {
      setActiveSection(section);
    }
  }, [searchParams]);

  return section;
}
