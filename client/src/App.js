import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './components/AppNavBar';
import ToDoList from './components/ToDoList';

class App extends Component {
    render() {
        return (
            <div className = "App">
                <AppNavBar/>
            <ToDoList/>
            </div>
        );
    }
}

export default App;
