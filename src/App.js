import React, {Component} from 'react';
import Home from './Components/Home';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter store={store}>
          <Home />
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
