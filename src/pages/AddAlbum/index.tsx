import { SyntheticEvent, useContext, useState } from "react";
import { AlbumListContext } from "../../context/albumList.context";
import { iAlbum } from "../../models/iAlbum";
import styles from "./index.module.css";

export const AddAlbum = () => {
  const { addAlbum } = useContext(AlbumListContext);
  const initialSate: Partial<iAlbum> = {
    artist: "",
    albumName: "",
    albumPicture: "",
    albumInfo: "",
    albumYear: ""
  };
  const [formState, setFormState] = useState(initialSate);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    addAlbum({
      artist: formState.artist as string,
      albumName: formState.albumName as string,
      albumPicture: formState.albumPicture as string,
      albumInfo: formState.albumInfo as string,
      albumYear: formState.albumYear as string
    })
  }
  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement
    setFormState({ ...formState, [element.name]: element.value })
  };

  return (
    <main className={styles.AddAlbum}>
      <div className={styles.Add_Container}>
        <h2>Add An Album:</h2>

        <form className={styles.Add_List_Container} onSubmit={handleSubmit}>
          <input
            className={styles.Add_List_Li}
            type="text"
            name="artist"
            placeholder="Name of the Artist"
            value={formState.artist}
            onChange={handleChange}
          />
          <input
            className={styles.Add_List_Li}
            type="text"
            name="albumName"
            placeholder="Name of the Album"
            value={formState.albumName}
            onChange={handleChange}
          />
          <input
            className={styles.Add_List_Li}
            type="text"
            name="albumYear"
            placeholder="Year"
            value={formState.albumYear}
            onChange={handleChange}
          />

          <input
            className={styles.Add_List_Li}
            type="text"
            name="albumPicture"
            placeholder="image URL"
            value={formState.albumPicture}
            onChange={handleChange}
          />

          <input
            className={styles.Add_List_Li}
            name="albumInfo"
            placeholder="Add a Description"
            type="text"
            value={formState.albumInfo}
            onChange={handleChange}
          />

          <button className={styles.button} type="submit">
            Upload Sound
          </button>
        </form>
      </div>
    </main>
  );

}