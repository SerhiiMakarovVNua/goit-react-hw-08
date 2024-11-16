import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.searchBox}>
      <span style={{ fontSize: "17px", marginBottom: "5px" }}>
        Find contacts by name or number
      </span>
      <input
        className={styles.searchInp}
        type="text"
        name="filter"
        value={filter}
        onChange={(evt) => {
          dispatch(changeFilter(evt.target.value));
        }}
      />
    </label>
  );
};

export default SearchBox;