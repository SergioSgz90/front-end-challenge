import { AlbumCard } from '../../components/AlbumCard'
import { AddCardButton } from '../../components/AddAlbumButton'
import styles from './index.module.css'

export const AlbumList = (): JSX.Element => {
  return (
    <main className={styles.AlbumList}>
      <div className={styles.AlbumList_Container}>
        <AlbumCard />
        <AddCardButton />
      </div>
    </main>
  )
}
