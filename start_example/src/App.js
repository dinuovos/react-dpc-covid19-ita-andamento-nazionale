import React, { Component } from 'react'
import ListItem from './listItem'

function arrayGenerator(length) {
  return Array.apply(null, { length: length }).map(Number.call, Number)
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      multiplier: 1,
      data : props.data,
      number : props.number
    }
  }
  resetMultiplier() {
    window.performanceMeasurement = performance.now();
    let multiplier = this.state.multiplier === 1 ? 2 : 1;
    if(multiplier === 2){
      this.state.number+=20
    }
    this.setState({ multiplier})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.resetMultiplier.bind(this)}>Click Me</button>
        <ul>
          {
            arrayGenerator(this.state.number).map(i => {
              return <ListItem key={i} text={i + this.state.multiplier}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App