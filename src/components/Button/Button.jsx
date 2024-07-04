import css from "./Button.module.css";

export default function Button({ type, children }) {
  return (
    <>
      <button type={type} className={css.btn}>
        {children}
      </button>
    </>
  );
}
