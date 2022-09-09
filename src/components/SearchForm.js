import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  return (
    <div class="container my-5">
      <div class="row bg-light px-5 py-4 shadow">
        <div class="col-4"><strong>Start typing the cocktail name </strong></div>
        <div class="col-4">input</div>
        <div class="col-4">button</div>
        
      </div>
    </div>
  )
}

export default SearchForm
