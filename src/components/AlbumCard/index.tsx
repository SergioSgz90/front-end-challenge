import styles from './index.module.css'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AlbumListContext } from '../../context/albumList.context'
export const AlbumCard = (): JSX.Element => {
  const { albums } = useContext(AlbumListContext)

  return (
    <>
      {albums.map((item) => (
        <Link
          to={`/albumInfo/${item.id}`}
          className={styles.AlbumCard}
          key={item.id}
        >
          <img
            className={styles.AlbumCard_img}
            src={item.albumPicture}
            alt='No Image Available'
          />
          <h3 className={styles.AlbumCard_AlbumName}>{item.albumName}</h3>
        </Link>
      ))}
    </>
  )
}
