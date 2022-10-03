import styles from './index.module.css'
import { Link } from 'react-router-dom'
import add_album_button from '../../assets/add_album_button.svg'
export const AddCardButton = (): JSX.Element => {
  return (
    <Link to="addAlbum">
      <div className={styles.AddAlbum_container}>
        <img className={styles.AddAlbum_button} src={add_album_button} alt="" />
      </div>
    </Link>
  )
}
