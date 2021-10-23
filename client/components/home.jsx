import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

import { history } from '../redux'

const Home = ({ setUser }) => {
  const [value, setValue] = useState('')

  // const onChange = (e) => {
  //   setValue(e.target.value)
  // }

  const onClick = () => {
    setUser(value)
    history.push(`/${value}`)
  }

  return (
    <div className="flex justify-center items-center">
      <Head title="Welcome" />
      <div className="flex flex-col bg-gray-100 rounded border m-2 p-4 space-y-2">
        <input
          className="rounded p-2"
          type="text"
          id="input-field"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="border bg-gray-300 rounded p-2"
          type="button"
          id="search-button"
          onClick={onClick}
        >
          Enter
        </button>
        <Link className="border bg-gray-300 rounded p-2" id="search-link" to={`/${value}`}>
          Enter with Link
        </Link>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
