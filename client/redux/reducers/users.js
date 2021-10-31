const SET_USER_LIST = 'github-browser/users/SET_USER_LIST'

const initialState = {
  userList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LIST: {
      return {
        ...state,
        userList: action.payload
      }
    }
    default:
      return state
  }
}

export const setUserList = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const data = localStorage.getItem('store')
  return (dispatch) => {
    if (data) {
      console.log('Data in Local Storage')
      dispatch({
        type: SET_USER_LIST,
        payload: JSON.parse(data)
      })
    } else {
      console.log('Data in remote API')
      fetch(url)
        .then((r) => r.json())
        .then((array) => {
          dispatch({
            type: SET_USER_LIST,
            payload: array
          })
        })
        .catch((e) => console.log(e))
    }
  }
}
