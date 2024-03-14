import React from 'react'
import { IoSearch } from "react-icons/io5";
import { UseTheme } from '@/utils/useTheme';

interface SearchProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchQuery: string,
}

const SearchBar = ({ searchQuery, handleSearch }: SearchProps) => {
  const { isDarkMode } = UseTheme()


  return (
    <div className={isDarkMode ? 'mx-auto max-w-4xl flex gap-3 items-center relative' : 'mx-auto max-w-4xl flex gap-3 items-center relative'}>
      <IoSearch className='srch text-gray-300 text-[22px] dark:text-gray-800' />
      <input
        value={searchQuery}
        onChange={handleSearch}
        className={isDarkMode
          ? 'rounded-[6px] border border-black h-full w-full text-black px-8 py-[12px] bg-[#fff] '
          : 'rounded-[6px] border border-white h-full w-full text-white px-8  py-[12px] bg-black'}
        type="text"
        placeholder='Search'
      />
    </div>
  )
}

export default SearchBar