import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filters.filters);

  const filterData = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.name.toLowerCase());
  });

  return (
    <ul>
      {filterData.map(contact => (
        <li key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
