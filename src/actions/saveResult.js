const saveResult = (url, result) => dispatch => {

  const fullUrl = `${url}?jsonData=${JSON.stringify(result)}`;

  const request = fetch(fullUrl);

  return request
    .then(resp => {
      dispatch({
        type: 'SAVE_RESULT',
        payload: {...resp, ...result}
      })
    })
};

export default saveResult;
