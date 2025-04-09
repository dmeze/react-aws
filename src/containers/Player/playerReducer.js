import { GET_SONG_URL, SET_PLAYED_SONG } from './playerActionTypes'

const initialState = {
  playedSongURL: ''
}

const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_SONG_URL:
    return {
      ...state,
      playedSongURL: payload
    }
  default:
    return state
  }
}

export default playerReducer
