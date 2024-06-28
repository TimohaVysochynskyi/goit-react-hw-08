import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h2 class={css.title}>About the project</h2>
      <p className={css.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        molestias quis, minus, eveniet repellendus rem voluptate sequi nostrum
        officiis vero animi facere adipisci sed, veritatis nulla placeat
        aspernatur quae id.
      </p>
      <p className={css.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        inventore laborum ab beatae. Fugit, provident. Tempora, perferendis
        tenetur! Odio exercitationem iure magnam fugit, mollitia veniam ea? Quos
        minima temporibus mollitia.
      </p>
    </div>
  );
}
