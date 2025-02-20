import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.contaiher}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
