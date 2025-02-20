import ContactFotm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <div className="cont">
        <h1>Phonebook</h1>
      </div>

      <ContactFotm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
