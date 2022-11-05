export const signup = (dispatch) => {
  return ({ email, password }) => {
    console.log("Signup");
  };
};

export const signin = user => ({
    type: 'signin',
    payload: {
        user: user
    }
});

export const signout = user => ({
    type: 'signout',
    payload: {
      user : null
    }
});
