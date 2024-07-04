import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.container}>
        <div className={css.col}>
          <h2 className={css.title}>Wellcome to Phonebook!</h2>
          <p className={css.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            voluptas debitis nam, corrupti enim eos, amet culpa tenetur labore,
            similique illum minus ullam delectus eveniet voluptatem tempora unde
            sit quas.
          </p>
          <p className={css.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas iusto
            deleniti nihil aliquam quasi deserunt dicta ullam, amet, repudiandae
            dolore, repellat aperiam quod nobis ex. Veritatis nulla repellendus
            dolore ratione.
          </p>
        </div>
        <div className={css.col}>
          <img src="" alt="Logo image" className={css.image} />
        </div>
      </div>
    </>
  );
}
