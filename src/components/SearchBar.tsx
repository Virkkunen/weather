import React, { FormEvent } from 'react';
import { useSearch } from '../hooks/useSearch';

export const SearchBar = () => {
  const { searchQuery, handleSearchSubmit, handleSearchChange } = useSearch();

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type='text'
        placeholder='Search for a city...'
        className='form-input mt-0 block w-full md:w-1/2 md:mx-auto px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-lavender bg-inherit caret-lavender'
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </form>
  );
};
