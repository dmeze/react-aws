import { API, graphqlOperation } from 'aws-amplify'

import { listSongs } from '../../graphql/queries'
import { FETCH_SONGS, LIKE_SONG, SET_PLAYED_SONG } from './songActionTypes'
import { updateSongs } from '../../graphql/mutations'

export const fetchSongs = () => async (dispatch) => {
  try {
    const { data: { listSongs: { items } } } = await API.graphql(graphqlOperation(listSongs))

    dispatch({
      type: FETCH_SONGS,
      payload: items
    })
  } catch (e) {
    console.log(e)
  }
}

export const likeSong = (song) => async (dispatch) => {
  try {
    const updatedSong = { ...song, like: ++song.like }
    delete(updatedSong.createdAt)
    delete(updatedSong.updatedAt)
    delete(updatedSong.__typename)

    await API.graphql(graphqlOperation(updateSongs, { input: updatedSong }))

    dispatch({
      type: LIKE_SONG,
      payload: song.id
    })
  } catch (e) {
    console.log(e)
  }
}

export const setPlayedSong = (payload) => ({
  type: SET_PLAYED_SONG,
  payload
})
