import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import ShowBooks from './page/ShowBooks'
import EditBooks from './page/EditBooks'
import DeleteBooks from './page/DeleteBooks'
import CreateBooks from './page/CreateBooks'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBooks />} />
      <Route path='/books/edit/:id' element={<EditBooks />} />
      <Route path='/books/delete/:id' element={<DeleteBooks />} />
    </Routes>
  )
}

export default App