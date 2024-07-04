import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const username = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text}>
            Hello, <b>{username}</b>!
          </p>
        </li>
        <li className={css.item}>
          <button type="button" className={css.btn} onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </>
  );
}
