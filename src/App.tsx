import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../src/components/Layout'
import { AlbumList } from '../src/pages/AlbumList'
import { AddAlbum } from './pages/AddAlbum'
import { AlbumInfo } from './pages/AlbumInfo'
import { AlbumUpdate } from './pages/AlbumUpdate'

import './App.css'
import { AlbumListProvider } from './context/albumList.provider'

function App (): JSX.Element {
  return (
    <AlbumListProvider>
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
              path="/albumInfo/:id"
              element={
                <React.Suspense>
                  <AlbumInfo />
                </React.Suspense>
              }
            />
            <Route
              path="/albumUpdate"
              element={
                <React.Suspense>
                  <AlbumUpdate />
                </React.Suspense>
              }
            />
          </Routes>
        </Layout>
      </div>
    </AlbumListProvider>
  );
}

export default App

