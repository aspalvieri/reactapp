import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        name: props.name
      }
    }
  
    render() {
      return(
        <div>
          <p>Hello, {this.state.name}</p>
  
          <input value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} />
        </div>
      )
    }
}

function App () {
  return (
    <div>
      <Welcome name="Shaun" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)