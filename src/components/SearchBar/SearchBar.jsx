import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar_styled';
import { HiSearch } from 'react-icons/hi';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handlerRequest = evt => {
    evt.preventDefault();
    if (!query) {
      return;
    }

    onSubmit(query);
  };

  const handleChange = evt => {
    setQuery(evt.target.value.trim());
  };

  return (
    <SearchForm onSubmit={handlerRequest}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>
          <HiSearch style={{ width: 20, height: 20 }} />
        </SearchFormButtonLabel>
      </SearchFormButton>
      <SearchFormInput
        type="text"
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />
    </SearchForm>
  );
};

export default SearchBar;
