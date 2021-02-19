import React from 'react'

export const getSteck = () => {
  return JSON.parse(localStorage.getItem('search-history'))
    ? JSON.parse(localStorage.getItem('search-history'))
    : []

}

export const steckPush = (value) => {
  const steck = getSteck()
  steck.unshift(value)
  if (steck.length > 5) {
    steck.pop()
  }
  localStorage.setItem('search-history', JSON.stringify(steck))
}

export const createSearchHistory = (setList) => {
  const steck = getSteck()
  if (steck) {
    setList(steck
      .map((item, idx) => <li key={idx}>{item}</li>))
  }
}