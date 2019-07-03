import * as api from '../../api/repositories';

const FETCH_REPOSITORIES = 'FETCH_RESOURCES_EXCEL';
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

        console.log(resp);
        //dispatch({ type: FETCH_REPOSITORIES_SUCCESS, payload: items });
        return resp;
      } catch (error) {
        dispatch({ type: FETCH_REPOSITORIES_FAILURE, payload: error });
        throw error;
      }
    };
  },
};
