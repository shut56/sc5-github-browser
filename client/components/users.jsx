import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setUserList } from '../redux/reducers/users'

const Users = () => {
  const users = useSelector((store) => store.users.userList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserList())
    return () => {}
  }, [])

  const handleSaveButton = () => {
    localStorage.setItem('store', JSON.stringify(users))
  }
  const handleRemoveButton = () => {
    localStorage.removeItem('store')
  }

  return (
    <>
      <div>User List</div>
      {users.map((userObj) => {
        return <div key={userObj?.id}>{userObj?.name}</div>
      })}
      <button
        type="button"
        onClick={handleSaveButton}
        className="border rounded p-2 m-2 bg-green-500 font-semibold"
      >
        Save
      </button>
      <button
        type="button"
        onClick={handleRemoveButton}
        className="border rounded p-2 m-2 bg-red-500 font-semibold"
      >
        Remove
      </button>
    </>
  )
}

export default Users
