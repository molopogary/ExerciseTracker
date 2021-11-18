import "bootstrap/dist/css/bootstrap.min.css"

import ExerciseList from './components/ExerciseList'
import EditExercise from './components/EditExercise'

import CreateUser from './components/CreateUser'
import CreateExercise from './components/CreateExercise'

import Navbar from './components/Navbar'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {

  return (
    <>

    <Navbar/>
    <br/>


    
      <div className='container'>
        <Routes>
          <Route path='/' element={<ExerciseList/>}/>
          <Route path='/edit' element={<EditExercise/>}/>
          <Route path='/user' element={<CreateUser/>}/>
          <Route path='/exercise' element={<CreateExercise/>}/>
        </Routes>
      </div>
    
    </>


    
   
     
  
    
      )
}

export default App;
