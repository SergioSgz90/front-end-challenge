import styles from './index.module.css'

import { Link } from 'react-router-dom'
export const AlbumCard = (): JSX.Element => {
  return (
    <>
      <Link to="/albumList/albumInfo" className={styles.AlbumCard}>
        <img
          className={styles.AlbumCard_img}
          src="https://m.media-amazon.com/images/I/A1y8IvOibwL._SL1500_.jpg"
          alt="No Image Available"
        />
        <h3 className={styles.AlbumCard_AlbumName}>Hail to the Thief</h3>
      </Link>
    </>
  )
}
