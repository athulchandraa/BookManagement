import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import AddBooks from './components/AddBooks'
import UpdateBooks from './components/UpdateBooks'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/add-Books' element={<AddBooks/>}/>
        <Route path='/edit/:id' element={<UpdateBooks/>}/>
      </Routes>
    </>
  )
}

export default App
