import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={css.item}>
            <NavLink to="/contacts" className={css.link}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
}
