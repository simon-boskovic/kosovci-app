import ImageSwiper from "@/components/homepage/ImageSwiper";
import styles from "../styles/HomePage.module.scss";
import getFileStructure from "@/components/js/ffmpeg";
import NearestEvents from "@/components/homepage/NearestEvents";
import Tour, { IYearEvents } from "@/components/homepage/Tour";
import path from "path";
import fsp from "fs/promises";

export interface ICompressedImages {
  image: string;
  smallImage: string;
}

async function getSwiperImages(): Promise<ICompressedImages[]> {
  const relativeHeroImagePath = "/images/swiper";
  return await getFileStructure(
    process.cwd() + "/public" + relativeHeroImagePath,
    relativeHeroImagePath,
    "20:-1",
    "1200:-1",
    100
  );
}

async function getAllEvents(): Promise<IYearEvents> {
  const tourDataPath = path.join(process.cwd(), "data", "tour-data.json");

  return await fsp
    .readFile(tourDataPath, "utf-8")
    .then((res) => JSON.parse(res));
}

export default async function HomePage() {
  const images = await getSwiperImages();
  const tour = await getAllEvents();

  return (
    <main className={styles["c-main-wrapper"]}>
      <div className={styles["c-hero-container"]}>
        <div className={styles["c-homepage-item-1"]}>
          <h1>
            Kosovci - Legendární zábavná skupina s dlouholetou historií, která
            rozvíjí tradici hudby a zábavy
          </h1>
        </div>
        <div className={styles["c-homepage-item-2"]}>
          <ImageSwiper swiperImagePaths={images} />
        </div>
      </div>
      <div className={styles["c-homepage-container"]}>
        <div className={styles["c-homepage-item-3"]}>
          <NearestEvents tour={tour} />
        </div>
        <div className={styles["c-homepage-item-4"]}>
          {<Tour tour={tour} />}
        </div>
        <div className={styles["c-homepage-item-5"]}>
          <h2>Aktuality</h2>
        </div>
      </div>
    </main>
  );
}
