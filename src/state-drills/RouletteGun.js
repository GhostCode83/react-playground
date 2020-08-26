import React from 'react'

class RouletteGun extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     chamber: null,
     spinningTheChamber: false,
     message: ''
   }
 }
  
  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
      message: ''
    })
    this.displayMessage()
  }  

  displayMessage(){
    let chamber = Math.ceil(Math.random()* 8)
    this.setState(
      {chamber: chamber}
    )
    setTimeout(() => {
      this.setState({spinningTheChamber: false})
      if  (chamber === this.props.chamber) {
        this.setState({message: 'BANG!!!'})
      } else {
        this.setState({message: "you're safe!"})
      } 
    }, 2000)
    
  }
  


  render() {
    let spinningMessage = ''
    if (this.state.spinningTheChamber ) {
      spinningMessage = 'spinning the chamber and pulling the trigger! ...'
    } 
    return (
      <div>
        Hello Soviet!
        <button onClick={() => this.handleClick()}>Pull the trigger!</button>
    <p>{this.state.message} {spinningMessage}</p>
      </div>
    )
  }
}

export default RouletteGun