import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './components/AppNavBar';
import ToDoList from './components/ToDoList';
import { Provider } from 'react-redux';
import store from "./store";
import itemModal from './components/itemModal';
import { Container } from 'reactstrap'

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
            <div className = "App">
                <AppNavBar/>
                    <Container>
                    <itemModal/>
                    <ToDoList/>
                </Container>
            </div>
            </Provider>
        );
    }
}

export default App;
