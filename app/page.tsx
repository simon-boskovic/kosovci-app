import ImageSwiper from "@/components/homepage/ImageSwiper";
import styles from "../styles/HomePage.module.scss";
import getFileStructure from "@/components/js/ffmpeg";

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

export default async function HomePage() {
  const images = await getSwiperImages();
  return (
    <main className={styles["c-main-wrapper"]}>
      <div className={styles["c-homepage-container"]}>
        <div className={styles["c-homepage-item-1"]}>
          <ImageSwiper swiperImagePaths={images} />
        </div>
        <div className={styles["c-homepage-item-2"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolore,
          rerum nostrum minima optio soluta dolorum similique exercitationem
          architecto, qui iure quasi nisi modi. Maxime, recusandae placeat?
          Ratione dicta sapiente asperiores at deleniti illum ab nulla placeat
          quo. Eaque labore aliquam ipsum mollitia, accusantium unde laboriosam
          harum iste sapiente enim, amet iure similique excepturi sequi quaerat?
          Labore sapiente laborum quis voluptates facere atque, ratione libero
          est alias quo voluptatibus. Cum, qui non? Modi quae molestias iusto ut
          aliquid repudiandae esse. Aliquid perferendis ratione qui. Dicta
          sapiente quis quidem eaque iusto quam, accusantium, incidunt ab
          soluta.
        </div>
        <div className={styles["c-homepage-item-3"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolore,
          rerum nostrum minima optio soluta dolorum similique exercitationem
          architecto, qui iure quasi nisi modi. Maxime, recusandae placeat?
          Ratione dicta sapiente asperiores at deleniti illum ab nulla placeat
          quo. Eaque labore aliquam ipsum mollitia, accusantium unde laboriosam
          harum iste sapiente enim, amet iure similique excepturi sequi quaerat?
          Labore sapiente laborum quis voluptates facere atque, ratione libero
          est alias quo voluptatibus. Cum, qui non? Modi quae molestias iusto ut
          aliquid repudiandae esse. Aliquid perferendis ratione qui. Dicta
          sapiente quis quidem eaque iusto quam, accusantium, incidunt ab
          soluta.
        </div>
        <div className={styles["c-homepage-item-4"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolore,
          rerum nostrum minima optio soluta dolorum similique exercitationem
          architecto, qui iure quasi nisi modi. Maxime, recusandae placeat?
          Ratione dicta sapiente asperiores at deleniti illum ab nulla placeat
          quo. Eaque labore aliquam ipsum mollitia, accusantium unde laboriosam
          harum iste sapiente enim, amet iure similique excepturi sequi quaerat?
          Labore sapiente laborum quis voluptates facere atque, ratione libero
          est alias quo voluptatibus. Cum, qui non? Modi quae molestias iusto ut
          aliquid repudiandae esse. Aliquid perferendis ratione qui. Dicta
          sapiente quis quidem eaque iusto quam, accusantium, incidunt ab
          soluta.
        </div>
      </div>
    </main>
  );
}
