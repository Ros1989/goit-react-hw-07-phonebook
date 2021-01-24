import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { FilterBlock, Label, Title, Input } from './StyledComponents';

export default function FilterContacts() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  return (
    <FilterBlock>
      <Label>
        <Title>Find Contacts by name</Title>
        <Input
          id="filter"
          type="text"
          value={filter}
          onChange={event =>
            dispatch(contactsActions.filterContact(event.target.value))
          }
        />
      </Label>
    </FilterBlock>
  );
}

FilterContacts.propTypes = {
  OnInputFilter: PropTypes.func,
  value: PropTypes.string,
};
