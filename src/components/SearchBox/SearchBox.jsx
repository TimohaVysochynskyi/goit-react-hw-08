import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContactFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectContactFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <>
      <div className={css.container}>
        <input
          type="text"
          className={css.input}
          placeholder="Find ppl here"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
