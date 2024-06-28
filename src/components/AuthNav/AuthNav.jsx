import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/login" class={css.link}>
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
}
