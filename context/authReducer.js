export default (state = initialState, action) => {
    switch (action.type) {
      case 'signout':
        return {...state, user: null};
      case 'signin':
        return {
            ...state,
            user: action.payload.user
        };
      case 'signup':
        return {
          token: action.payload.token,
          email: action.payload.email,
        };
      default:
        return state;
    }
};

const initialState = {
    user: null
}