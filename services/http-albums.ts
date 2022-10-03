import { iAlbum } from '../src/models/iAlbum';

const url = 'http://localhost:3500/albums/';

export function getAllAlbums (): Promise<Array<iAlbum>> {
    return fetch(url).then((resp) => resp.json())
}
export function addAlbum (album: Omit<iAlbum, "id">): Promise<iAlbum> {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify (album),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json())
}
export function updateAlbum (album: iAlbum): Promise<iAlbum> {
    return fetch(url + album.id, {
        method: 'PATCH',
        body: JSON.stringify(album),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json())
}
export function deleteAlbum (id: iAlbum['id']) {
    return fetch(url + id, {
        method: 'DELETE',
    });
}
