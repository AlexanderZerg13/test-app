import { types } from './actions';

const initialState = {
  items: [],
  error: false,
  fetching: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_REPOSITORIES:
      return {
        ...state,
        error: false,
        fetching: true,
      };
    case types.FETCH_REPOSITORIES_SUCCESS:
      return {
        items: action.payload,
        error: false,
        fetching: false,
      };
    case types.FETCH_REPOSITORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    default:
      return state;
  }
}
