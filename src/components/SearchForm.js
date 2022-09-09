import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  return (
    <div class="container my-5">
      <div class="row bg-light px-5 py-4 shadow">
        <div class="col-4"><strong>search form component</strong></div>
        <div class="col-4"></div>
        <div class="col-4"></div>
        
      </div>
    </div>
  )
}

export default SearchForm
