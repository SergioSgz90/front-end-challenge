import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './index.module.css'
import pencil from '../../assets/Pencil.svg'
import { iAlbum } from '../../models/iAlbum'
import { getAlbumbyId } from '../../../services/http-albums'

export const AlbumInfo = (): JSX.Element => {
  const [info, setInfo] = useState<any>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(
    () => {
      getAlbumbyId(id).then(setInfo).catch(console.error)
    },
    [id]
  )

  return (
    <main className={styles.AlbumInfo}>
      <img
        className={styles.AlbumImg}
        src={info?.albumPicture}
        alt='Album Image Missing'
      />
      <div className={styles.AlbumInfo_Container}>
        <h2>Album info</h2>
        <div className={styles.Album_List_Container}>
          <ul className={styles.Album_List}>
            <li className={styles.Album_List_Li}>
              <strong> Artist:</strong> {info?.artist}
            </li>
            <li className={styles.Album_List_Li}>
              <strong>Album Name:</strong> {info?.albumName}
            </li>
            <li className={styles.Album_List_Li}>
              <strong>Year:</strong> {info?.albumYear}
            </li>
            <li className={styles.Album_List_Li}>
              <strong>Description:</strong> {info?.albumInfo}
            </li>
          </ul>
        </div>
        <Link to={`/albumUpdate/${id}`} className={styles.pencil}>
          <img src={pencil} alt='update' />
        </Link>
      </div>
    </main>
  )
}
