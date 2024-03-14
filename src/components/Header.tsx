import React, { useReducer, ChangeEvent, useEffect } from 'react'
import '../assets/Header.css'
import { initialState, headerReducer, REDUCER_ACTION_TYPE } from './reducers/Header.reducer'

const Header: React.FC = () => {
  const [state, dispatch] = useReducer(headerReducer, initialState)
  
  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_SEARCH_VALUE, payload: e.target.value })
  }

  const handleSearch = (): void => {
    throw new Error('Function not implemented.')
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className='header'>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='search-bar'>
        <input type="search" name="search" pattern=".*\S.*" onChange={handleSearchValueChange} value={state.searchValue} required />
        <button className="search-btn" onClick={handleSearch}>
          <span>Search</span>
        </button>
      </div>
    </div>
  )
}

export default Header