import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.container}>
        <p className={s.text}>
          <FaUser className={s.clip} />
          {name}
        </p>
        <p className={s.text}>
          <BsFillTelephoneFill className={s.clip} />
          {number}
        </p>
        <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
