const fetchUser = (url, user) => dispatch => {

  const fullUrl = `${url}?jsonData=${JSON.stringify(user)}`;

  const request = fetch(fullUrl);

  return request
    .then(resp => resp.json())
    .then(resp => {
      dispatch({
        type: 'SET_USER',
        payload: resp
      })
    })
};

export default fetchUser;
