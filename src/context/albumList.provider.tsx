import { iAlbum } from '../models/iAlbum'
import { useEffect, useState } from 'react'
import * as api from '../../services/http-albums'
import { AlbumListContext } from './albumList.context'

export function AlbumListProvider({ children } : { children: JSX.Element }) {
  const initialState: iAlbum[] = []
  const [albums, setAlbums] = useState(initialState)

  useEffect(() => {
    api.getAllAlbums().then((data) => {
      setAlbums(data)
    }).catch(console.error)
  }, [])

  const addAlbum = (album: Omit<iAlbum, 'id'>) => {
    api.addAlbum(album).then((data) =>
      setAlbums([...albums, data])
    ).catch(console.error)
  }

  const deleteAlbum = (id: any) => {
    api.deleteAlbum(id).then((resp) => {
      if (resp.ok) {
        setAlbums(albums.filter((item) => item.id !== id))
      }
    }).catch(console.error)
  }
  const updateAlbum = (album: iAlbum) => {
    api.updateAlbum(album)
      .then((data) => setAlbums(albums.map((item) => (item.id === album.id ? data : item)))
      ).catch(console.error)
  }

  return (
    <AlbumListContext.Provider value={{ albums, addAlbum, deleteAlbum, updateAlbum }}>
      {children}
    </AlbumListContext.Provider>
  )
}
