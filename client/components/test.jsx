import React, { useState, useEffect, useReducer } from 'react'

const initialState = {
  userVasya: {},
  userPetr: {},
  userNico: {},
}

const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER_VASYA': {
      return {
        ...state,
        userVasya: action.payload.user
      }
    }
    case 'UPDATE_USER_PETR': {
      return {
        ...state,
        userPetr: action.payload.user
      }
    }
    case 'UPDATE_USER_NICO': {
      return {
        ...state,
        userNico: action.payload.user
      }
    }
    default:
      return state
  }
}

const Test = () => {
  const [userData, setUserData] = useState(initialState)
  const [store, dispatch] = useReducer(reducerFunc, initialState)

  useEffect(() => {
    setTimeout(() => {
      console.log(1000, userData)

      setUserData({ ...userData, userVasya: { name: 'vasya' } })
      dispatch({
        type: 'UPDATE_USER_VASYA',
        payload: {
          index: 1,
          user: {
            name: 'vasya'
          }
        }
      })
    }, 1000)

    setTimeout(() => {
      console.log(2000, userData)

      setUserData({ ...userData, userPetr: { name: 'petr' } })
      dispatch({
        type: 'UPDATE_USER_PETR',
        payload: {
          index: 2,
          user: {
            name: 'petr'
          }
        }
      })
    }, 2000)

    setTimeout(() => {
      console.log(3000, userData)

      setUserData({ ...userData, userNico: { name: 'nico' } })
      dispatch({
        type: 'UPDATE_USER_NICO',
        payload: {
          index: 3,
          user: {
            name: 'nico'
          }
        }
      })
    }, 3000)
  }, [])

  return (
    <>
      <div>
        <div>useState</div>
        <div>{userData.userVasya?.name}</div>
        <div>{userData.userPetr?.name}</div>
        <div>{userData.userNico?.name}</div>
      </div>
      <div>
      <div>useReducer</div>
        <div>{store.userVasya.name}</div>
        <div>{store.userPetr.name}</div>
        <div>{store.userNico.name}</div>
      </div>
    </>
  )
}

Test.propTypes = {}

export default Test
