const resultsInitState = {
  user_id: null, speed: 0, accuracy: 0
};

export default (state = resultsInitState, action) => {
  switch (action.type) {
    case 'SAVE_RESULT':
      const resp = action.payload;
      return {
        ...state,
        ...resp
      };
    default:
      return state;
  }
};
