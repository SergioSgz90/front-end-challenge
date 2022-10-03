import { createContext } from "react";
import { iAlbum } from "../models/iAlbum";

const initialContext: {
  albums: Array<iAlbum>;
  addAlbum(album: Omit<iAlbum, "id">): void
  deleteAlbum(id: number): void
  updateAlbum(album: iAlbum):void
} = {
  albums: [],
  addAlbum: (sound) => {},
  deleteAlbum: (id) => {},
  updateAlbum: (sound) => {}
}

export const AlbumListContext = createContext(initialContext)
