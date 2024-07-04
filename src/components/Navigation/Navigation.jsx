import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={css.item}>
            <NavLink to="/contacts" className={linkClass}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
}
