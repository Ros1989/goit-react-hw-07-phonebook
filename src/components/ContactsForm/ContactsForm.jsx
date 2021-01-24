import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { Form, FormLabel, Input, Button } from './StyledComponents';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const [name, setNameValue] = useState('');
  const [number, setNumberValue] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setNameValue(value);
        break;
      case 'number':
        setNumberValue(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (!name || !number) {
      alert('You have not entered all the data');
      return;
    }

    if (Number.isNaN(+number)) {
      alert('Phone number must contain only numbers');
      return;
    } else {
      dispatch(contactsOperations.addContact(name, number));
    }
    resetInput();
    // setNameValue('');
    // setNumberValue('');
  };

  const resetInput = () => {
    setNameValue('');
    setNumberValue('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <FormLabel id="name" htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={handleInputChange}
        />
      </FormLabel>
      <FormLabel id="number" htmlFor="number">
        Number
        <Input
          name="number"
          type="tel"
          value={number}
          placeholder="Enter phone number"
          onChange={handleInputChange}
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

// ContactsForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
