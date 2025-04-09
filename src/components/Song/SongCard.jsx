import { Card, Flex, Heading, Icon, Text } from '@aws-amplify/ui-react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { likeSong, setPlayedSong } from '../../containers/Song/songActions'
import { getSongURL } from '../../containers/Player/playerActions'
import { Like, Pause, Play } from '../Header/Icons/Icons'
import { selectPlayedSong } from '../../containers/Song/songSelectors'

import styles from './SongCard.module.scss'

const SongCard = ({
  song
}) => {
  const dispatch = useDispatch()
  const playedSong = useSelector(selectPlayedSong)
  const {
    like,
    filePath,
    title,
    description,
    updatedAt,
    id
  } = song

  const PlayIcon = (props) => playedSong.id === id
    ? <Pause {...props} />
    : <Play {...props} />

  const handlePlay = () => {
    dispatch(setPlayedSong(song))
    dispatch(getSongURL(filePath))
  }

  return (
    <Card className={styles.songCard}>
      <Flex
        direction="column"
        alignItems="flex-start"
        className={styles.content}
      >
        <Heading level={5} className={styles.title}>
          {title}
        </Heading>
        <Text as="span" className={styles.description}>
          {description}
        </Text>
        <Text as="span" className={styles.date}>
          {new Date(updatedAt).toDateString()}
        </Text>
      </Flex>
      <PlayIcon className={styles.playIcon} onClick={handlePlay} />
      <Like className={styles.heartIcon} onClick={() => dispatch(likeSong(song))} />
      <Text className={styles.likeCount}>{like}</Text>
    </Card>
  )
}

SongCard.propTypes = {
  song: PropTypes.object
}

export default SongCard
