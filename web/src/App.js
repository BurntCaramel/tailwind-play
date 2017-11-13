import './App.css'
import Editor from './components/Editor'

import { h, Component } from 'preact'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
      </div>
    )
  }
}
