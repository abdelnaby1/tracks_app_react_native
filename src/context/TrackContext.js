import trackerApi from '../api/trackerApi';
import createDataContext from './createDataContext';
const trackReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TRACKS':
      return action.payload;

    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  // console.log(response.data.data.tracks);
  dispatch({type: 'FETCH_TRACKS', payload: response.data.data.tracks});
};
const createTrack = dispatch => async (name, locations) => {
  trackerApi.post('/tracks', {name, locations});
};

export const {Context, Provider} = createDataContext(
  trackReducer,
  {fetchTracks, createTrack},
  [],
);
