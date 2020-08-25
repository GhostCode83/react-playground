import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      count: this.state.count + 1
    }), 1000)
    console.log(this.interval)
  }

  renderBomb = () => {
    let time = this.state.count;
    if (time >= 8) {
      clearInterval(this.interval) 
      return 'BOOM!!! '
    } else if (time % 2 === 0) {
       return 'tick'
    } else {
      return 'tock'
    }
  }

  render() {
    return (<div>
        {this.renderBomb()}
      </div>
    )
  }
}

export default Bomb