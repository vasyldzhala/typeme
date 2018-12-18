const getStatistics = (url, user_id) => dispatch => {

  const fullUrl = `${url}?jsonData=${JSON.stringify(user_id)}`;

  const request = fetch(fullUrl);

  return request
    .then(resp => resp.json())
    .then(resp => {
      dispatch({
        type: 'GET_STATISTICS',
        payload: resp
      })
    })
    .catch(resp => {
      dispatch({
        type: 'GET_STATISTICS_ERR',
        payload: resp
      })
    })
};

export default getStatistics;
