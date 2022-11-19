import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux"
import { legacy_createStore } from 'redux'
const store=legacy_createStore(Reducer)
import { BrowserRouter as Router } from 'react-router-dom'
import Reducer from "./store/Reducer"
ReactDOM.createRoot(document.getElementById('root')).render(
 <Router>
  <Provider store={store}>
    <App/>
  </Provider>
 </Router>
 
 
)
