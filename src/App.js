import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import ModuleBoard from './components/ModuleBoard';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProjectTask from './components/ProjectTask/AddProjectTask';
import AddModuleTask from './components/ProjectTask/AddModuleTask';
import {Provider} from "react-redux"
import store from "./store"
import UpdateProjectTask from './components/ProjectTask/UpdateProjectTask';
import UpdateModuleTask from './components/ProjectTask/UpdateModuleTask';
import MainBoard from './components/MainBoard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        
      <div className="App">       
        <Navbar/>
        <MainBoard/>
        <Route exact path="/mainboard" component={MainBoard}/>
        
        <Route exact path="/" component={ProjectBoard}/>
        <Route exact path="/addProjectTask" component={AddProjectTask}/>
        <Route 
        exact 
        path="/updateProjectTask/:pt_id" 
        component={UpdateProjectTask}
        />

        <Route exact path="/moduleBoard" component={ModuleBoard}/>
        <Route exact path="/addModuleTask" component={AddModuleTask}/>
        <Route 
        exact 
        path="/updateModuleTask/:pt_id" 
        component={UpdateModuleTask} 
        /> 

         </div>

      </Router>
      </Provider>
    );
  }
}

export default App;
