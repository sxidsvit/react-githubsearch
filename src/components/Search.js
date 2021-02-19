import React, { useEffect, useContext, useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { AlertContext } from '../context/Alert/AlertContext'
import { GithubContext } from '../context/GitHub/githubContext'
import { SearchList } from './SearchList'
import { steckPush, createSearchHistory } from '../utils/steck'

export const Search = () => {

  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const alert = useContext(AlertContext)
  const { search, clearRepos } = useContext(GithubContext)


  useEffect(() => {
    createSearchHistory(setList)
  }, [])


  const searchEventHandler = (value) => {
    clearRepos()
    if (value.trim()) {
      alert.hide()
      search(value.trim())
      steckPush(value)
      createSearchHistory(setList)
    } else {
      alert.show('Enter your search data!')
    }
  }

  const onSubmit = (event) => {
    if (event.key !== 'Enter') { return }
    searchEventHandler(value)
  }

  const onClick = (event) => searchEventHandler(value)

  return (
    <div className="search">
      <div className="input-group">
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          type="text"
          className="form-control"
          placeholder="repository search ..."
          aria-label="Username" aria-describedby="addon-wrapping"
          value={value}
          onChange={event => setValue(event.target.value)}
          onKeyPress={onSubmit}
        />
        <div className="input-group-prepend">
          <span className="input-group-text" id="addon-wrapping"
            onClick={onClick}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span>
        </div>
      </div>
      <h5 className="search-title">Search history:</h5>
      <SearchList list={list} />
    </div>
  )
} 