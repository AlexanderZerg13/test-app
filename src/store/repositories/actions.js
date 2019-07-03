import * as api from '../../api/repositories';

const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES';
const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';
const FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE';

export const types = {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAILURE,
};

export default {
  getList: (payload) => {
    return async dispatch => {
      dispatch({ type: FETCH_REPOSITORIES });
      try {
        const resp = await api.fetchList(payload);
        const items = resp.data.items;

        dispatch({ type: FETCH_REPOSITORIES_SUCCESS, payload: items });
        return items;
      } catch (error) {
        dispatch({ type: FETCH_REPOSITORIES_FAILURE, payload: error });
        throw error;
      }
    };
  },
};
