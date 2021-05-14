import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Fetch from './components/Fetch';


class App extends PureComponent {

    render(){
        return (    
            <div>
                <Fetch />
            </div>
        )
    }
}


const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);