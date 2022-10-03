import styles from "./index.module.css";
import Trash from "../../assets/Trash.svg";
import ArrowRepeat from "../../assets/ArrowRepeat.svg";
import { iAlbum } from "../../models/iAlbum";

export const AlbumUpdate = (): JSX.Element => {




  
  return (
    <main className={styles.AddAlbum}>
      <div className={styles.Add_Container}>
        <h2> Update Album:</h2>
        <div className={styles.Add_List_Container}>
          <ul className={styles.Add_List}>
            <li className={styles.Add_List_Li}>
              <strong> Image URL: </strong>
            </li>
            <li className={styles.Add_List_Li}>
              <strong> Artist:</strong> Radiohead
            </li>
            <li className={styles.Add_List_Li}>
              <strong>Album Name:</strong> Hail to the Thief
            </li>
            <li className={styles.Add_List_Li}>
              <strong>Year:</strong> 2003
            </li>
            <li className={styles.Add_List_Li}>
              <strong>Description:</strong> Hail to the Thief is the sixth album
              by the English rock band Radiohead. It was released on 9 June 2003
              through Parlophone internationally and a day later through Capitol
              Records in the United States. It was the last album released under
              Radiohead's record contract with EMI, the parent company of
              Parlophone and Capitol. After transitioning to a more electronic
              style on their albums Kid A (2000) and Amnesiac (2001), which were
              recorded through protracted studio experimentation, Radiohead
              sought to work more spontaneously, combining electronic and rock
              music. They recorded most of Hail to the Thief in two weeks in Los
              Angeles with their longtime producer Nigel Godrich, focusing on
              live takes rather than overdubs.
            </li>
          </ul>
        </div>
        <div className={styles.buttons_container}>
          <img className={styles.buttons} src={Trash} alt="delete" />
          <img className={styles.buttons} src={ArrowRepeat} alt="update" />
        </div>
      </div>
    </main>
  );
  
};

