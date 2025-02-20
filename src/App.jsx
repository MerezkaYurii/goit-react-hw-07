import ContactFotm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css';

function App() {
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
