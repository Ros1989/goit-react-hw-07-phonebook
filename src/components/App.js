import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { contactsSelectors, contactsOperations } from '../redux/contacts';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import SectionBlock from './Section/Section';
import ContactsFilter from './ContactsFilter/ContactsFilter';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <SectionBlock title="Phonebook">
        <ContactsForm />

        {isLoading ? (
          <Loader type="Rings" color="#00BFFF" height={30} width={30} />
        ) : null}

        <ContactsFilter />
        {contacts.length ? <ContactsList /> : null}
      </SectionBlock>
    </>
  );
}
