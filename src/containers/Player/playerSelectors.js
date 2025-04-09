import { createSelector } from 'reselect'

const selectSearch = store => store.player

export const selectPlayedSongURL = createSelector(
  selectSearch, state => state.playedSongURL
)
