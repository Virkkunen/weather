import React, { FormEvent } from 'react';
import { useSearch } from '../hooks/useSearch';

export const SearchBar = () => {
  const { searchQuery, handleSearchSubmit, handleSearchChange } = useSearch();

  return (
    <form onSubmit={handleSearchSubmit} className='flex gap-4 md:max-2xl:w-10/12'>
      <input
        type='text'
        placeholder='Search for a city...'
        className='form-input mt-0 block w-full 2xl:mx-auto px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-lavender bg-inherit caret-lavender'
        value={searchQuery}
        onChange={handleSearchChange}
        autoFocus
      />
      <button
        type='submit'
        className='rounded-lg bg-blue text-mantle py-1 px-3 text-sm font-medium hover:bg-lavender active:bg-opacity-60 transition ease-in-out duration-200'
      >Search</button>
    </form>
  );
};
