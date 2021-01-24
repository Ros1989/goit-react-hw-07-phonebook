import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import React from 'react';
// import PropTypes from 'prop-types';
import {
  TaskList,
  TaskItem,
  TaskItemElements,
  Button,
} from './StyledComponents';

export default function ContactsList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <TaskList>
      {visibleContacts.map(({ id, name, number }) => (
        <TaskItem key={id}>
          <TaskItemElements>{name} :</TaskItemElements>
          <TaskItemElements>{number}</TaskItemElements>
          <Button
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            Delete
          </Button>
        </TaskItem>
      ))}
    </TaskList>
  );
}

// ContactsList.propTypes = {
//   items: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func,
// };
