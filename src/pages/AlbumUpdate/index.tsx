import styles from './index.module.css'
import Trash from '../../assets/Trash.svg'
import ArrowRepeat from '../../assets/ArrowRepeat.svg'
import { useState, useEffect, useContext, SyntheticEvent } from 'react'
import { useParams } from 'react-router-dom'
import { iAlbum } from '../../models/iAlbum'
import { getAlbumbyId } from '../../../services/http-albums'
import { AlbumListContext } from '../../context/albumList.context'

export const AlbumUpdate = (): JSX.Element => {
  const initialState: iAlbum = {
    artist: '',
    albumName: '',
    albumPicture: '',
    albumInfo: '',
    albumYear: ''
  }

  const { deleteAlbum, updateAlbum } = useContext(AlbumListContext)
  const [info, setInfo] = useState<iAlbum | null>(initialState)
  const { id } = useParams<{ id: string }>()

  const handleDelete = () => deleteAlbum(info.id as number)
  const handleUpdate = () => {
    updateAlbum(info as iAlbum)
  }

  useEffect(() => {
    getAlbumbyId(id).then(setInfo).catch(console.error)
  }, [id])

  const handleChange = (event: SyntheticEvent) => {
    const fieldName = event.currentTarget.name as HTMLElement
    const newValue = event.currentTarget.value 
    setInfo((prev) => ({
      ...prev,
      [fieldName]: newValue,
    }))
  }

  return (
    <main className={styles.AddAlbum}>
      <div className={styles.Add_Container}>
        <h2> Update Album:</h2>
        <form className={styles.Add_List_Container} onSubmit={handleUpdate}>
          <input
            className={styles.Add_List_Li}
            type='text'
            name='artist'
            placeholder={info?.artist}
            value={info?.artist}
            onChange={handleChange}
          />
          <input
            className={styles.Add_List_Li}
            type='text'
            name='albumName'
            placeholder={info?.albumName}
            value={info?.albumName}
            onChange={handleChange}
          />
          <input
            className={styles.Add_List_Li}
            type='text'
            name='albumYear'
            placeholder={info?.albumYear}
            value={info?.albumYear}
            onChange={handleChange}
          />

          <input
            className={styles.Add_List_Li}
            type='text'
            name='albumPicture'
            placeholder={info?.albumPicture}
            value={info?.albumPicture}
            onChange={handleChange}
          />

          <input
            className={styles.Add_List_Li_Description}
            name='albumInfo'
            placeholder={info?.albumInfo}
            type='text'
            value={info?.albumInfo}
            onChange={handleChange}
          />
        </form>

        <div className={styles.buttons_container}>
          <img
            className={styles.buttons}
            src={Trash}
            alt='delete'
            onClick={() => handleDelete()}
          />

          <img
            className={styles.buttons}
            src={ArrowRepeat}
            alt='update'
            onClick={() => handleUpdate()}
          />
        </div>
      </div>
    </main>
  )
}
