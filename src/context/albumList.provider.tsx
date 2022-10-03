import { iAlbum } from "../models/iAlbum";
import { useEffect, useState } from "react";
import * as api from "../../services/http-albums";
import { AlbumListContext } from "./albumList.context";

export function AlbumListProvider({ children }: { children: JSX.Element }) {
  //Model

  const initialState: Array<iAlbum> = [];
  const [albums, setAlbums] = useState(initialState);

  useEffect(() => {
    api.getAllAlbums().then((data) => {
      setAlbums(data);
    });
  }, []);

  //Controller

  const addAlbum = (album: Omit<iAlbum, "id">) => {
    //Backend
    api.addAlbum(album).then((data) =>
      //estado
      setAlbums([...albums, data])
    );
  };

  const deleteAlbum = (id: number) => {
    api.deleteAlbum(id).then((resp) => {
      if (resp.ok) {
        setAlbums(albums.filter((item) => item.id !== id));
      }
    });
  };

  const updateAlbum = (album: iAlbum) => {
    api.updateAlbum(album)
      .then((data) =>
        setAlbums(albums.map((item) => (item.id === album.id ? data : item)))
      );
  };

  const context = {
    albums,
    addAlbum,
    deleteAlbum,
    updateAlbum,
  }


    return (
        <AlbumListContext.Provider value={context}>
            {children}
        </AlbumListContext.Provider>
    );
      

    }

