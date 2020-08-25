import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClickEvent = () => {
    const newCount = this.state.count + 1
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleClickEvent} >
          Add 1
        </button>
      </div>
    )
  }
}

export default Counter