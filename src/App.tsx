import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import Home from './components/Home';
import Wiki from './components/Wiki';


const App = () => {

  return (
    <Router>
        <div className="container p-3 my-3  bg-primary text-white rounded">
          <Navbar />      
          <br />
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={ExercisesList} />
          <Route exact path="/edit/:id" component={EditExercise} />
          <Route exact path="/create" component={CreateExercise} />          
          <Route exact path="/wiki/:description" component={Wiki} />
        </div>
    </Router>
  )
}




export default App;
