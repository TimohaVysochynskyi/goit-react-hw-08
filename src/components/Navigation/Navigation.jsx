import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </>
  );
}
