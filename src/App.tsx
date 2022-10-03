import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App (): JSX.Element {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="albumList"
            element={
              <React.Suspense>
                <AlbumList />
              </React.Suspense>
            }
          />
          <Route
            path="/albumList/addAlbum"
            element={
              <React.Suspense>
                <AddAlbum />
              </React.Suspense>
            }
          />
          <Route
            path="/albumList/albumInfo"
            element={
              <React.Suspense>
                <AlbumInfo />
              </React.Suspense>
            }
          />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
