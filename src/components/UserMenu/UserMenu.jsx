import css from "./UserMenu.module.css";
import { Link } from "react-router-dom";

export default function UserMenu() {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.helloText}>
            Hello, <b>user</b>!
          </p>
        </li>
        <li className={css.item}>
          <Link to="/" className={css.link}>
            Logout
          </Link>
        </li>
      </ul>
    </>
  );
}
