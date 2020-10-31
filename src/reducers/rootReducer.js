const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";
const BOOKINGS = "BOOKINGS";

const initState = {
  info: {
    logged: false,
  },
  bookings: [],
};

const reducer = (state = initState, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
      info: action.data,
    };
  } else if (action === SIGNUP) {
    return {
      ...state,
      info: action.data,
    };
  } else if (action.type === BOOKINGS) {
    return {
      ...state,
      bookings: action.data,
    };
  }else if(action.type==="LOGOUT"){
    return {
      ...initState
    }
  }
  return state;
};

export default reducer;
