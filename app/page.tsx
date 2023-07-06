import ImageSwiper from "@/components/homepage/ImageSwiper";
import styles from "../styles/HomePage.module.scss";
import getFileStructure from "@/components/js/ffmpeg";

async function getHeroData() {
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
  const images = await getHeroData();

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
          numquam nisi exercitationem magni commodi! Perferendis aspernatur
          similique neque quis suscipit asperiores laborum quo iure, consequatur
          cum expedita laudantium hic quasi animi voluptas. Mollitia atque vel
          eaque maxime ipsam ea cum eos rem doloremque quisquam facilis neque
          quas sunt beatae esse magnam, illo expedita laudantium commodi nisi
          soluta deleniti nulla ab! Tenetur at temporibus illo nam distinctio
          iste tempore atque voluptatum eum sed veniam, sit vitae officia ipsam
          molestias veritatis magni. Officia, dolorum accusamus. Natus veniam,
          ipsa nemo placeat quod aliquam, quidem voluptates enim eveniet minus
          necessitatibus quas consectetur assumenda aut dignissimos eum
          expedita. Eveniet doloremque rerum porro quam labore ipsam, obcaecati,
          temporibus ducimus aliquid aliquam pariatur maxime, vero illum quia
          animi. Laboriosam quasi nihil voluptatibus enim ut modi id eum totam
          beatae. Quasi obcaecati libero dolorum ipsa nemo optio sit dolores est
          quaerat perferendis consectetur esse, nam officiis aliquid quos
          veritatis fuga explicabo! Sapiente veritatis tempora, facere suscipit
          autem optio dolorem nesciunt rem! Accusantium sint tenetur quae
          delectus, voluptates officiis repudiandae! Necessitatibus provident
          similique quod consequuntur laboriosam atque sunt suscipit,
          consectetur quia quo et blanditiis recusandae esse iure ducimus dolor
          minus! Voluptatibus molestias dolorem placeat ipsum libero eius
          consectetur accusantium ad at modi perspiciatis doloribus maiores
          deserunt quam necessitatibus voluptate excepturi, iure minima, esse
          soluta.
        </div>
        <div className={styles["c-homepage-item-3"]}>C</div>
        <div className={styles["c-homepage-item-4"]}>D</div>
      </div>
    </main>
  );
}
