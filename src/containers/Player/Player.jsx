import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

import { selectPlayedSongURL } from './playerSelectors'

const Player = () => {
  const songUrl = useSelector(selectPlayedSongURL)

  return <ReactPlayer url={songUrl} />
}

export default Player
