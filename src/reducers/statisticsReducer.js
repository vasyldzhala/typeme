const statisticsInitState = {
  success: false,
  details: '',
  statistics: []
};

export default (state = statisticsInitState, action) => {
  const resp = action.payload;
  switch (action.type) {
    case 'GET_STATISTICS':
      return {
        ...state,
        success: true,
        details: '',
        statistics: [...resp]
      };
    case 'GET_STATISTICS_ERR':
      return {
        ...statisticsInitState,
        success: false,
        details: resp
      };
    default:
      return state;
  }
};
