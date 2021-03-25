import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

// Actions
const requestDog = () => {
  return { type: REQUEST_IMAGE };
}

const getImage = (json) => {
  return { type: GET_IMAGE, payload: json.message };
}

const failedRequest = (error) => {
  return { type: FAILED_REQUEST, payload: error }
}

export const fetchDog = () => {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then(
        (img) => dispatch(getImage(img)),
        (error) => dispatch(failedRequest(error)),
      );
  }
}

// Reducer
const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, isFetching: false, imagePath: payload };
    case FAILED_REQUEST:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
}

// Store

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
