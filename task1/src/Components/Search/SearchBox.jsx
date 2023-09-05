import React from 'react'

const SearchBox = ({setSearchQue, debounceFunction, setShowResults}) => {
  return (
    <div >
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search Here" onChange={(e) => {
              setSearchQue(e.target.value)
              debounceFunction()
            }}
            onFocus={setShowResults(true)}
              />
            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
    </div>
  )
}

export default SearchBox
