const userInitState = {
  id: null,
  name: '',
  password: ''
};

export default (state = userInitState, action) => {
  switch (action.type) {
    case 'SET_USER':
      const resp = action.payload;
      if (resp.id) {
        return {
          ...state,
          ...resp,
          success: true,
          details: ''
        };
      } else {
        return {
          ...userInitState,
          success: false,
          details: resp
        }
      }
    case 'SET_USER_ERR':
      return {
        ...state,
        success: false,
        errorMessage: 'Network Error, try later'
      };
    default:
      return state;
  }
};
