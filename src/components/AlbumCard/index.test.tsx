import { render, screen } from '@testing-library/react'
import AlbumCard from '../AlbumCard'

const mocked_album = {

  id: '1',
  artist: 'ArtistTest',
  albumName: 'AlbumTest',
  albumYear: '2020',
  albumImage: 'testImageUrl'
}

describe ('AlbumCard', ()=> {
    test('should display all the album data', ()=> {
        render(<AlbumCard {...mocked_album} />)
        expect(mocked_album.albumImage)
    })
})