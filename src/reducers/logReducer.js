const initState = {
  user: [],
  logFlag: false,
};
export const logReducer = (state = initState, action) => {
  switch (action.type) {
    case "logedIn":
      return {
        ...state,
        logFlag: true,
      };
    case "logedOut":
      return {
        ...state,
        logFlag: false,
      };
    default:
      return state;
  }
};
