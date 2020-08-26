import React from 'react';

class Accordion extends React.Component {
static defaultProps = {
  sections: []
}

  state = {
    currentSectionIndex: 0
  }

  handleButtonClick = () => {
    console.log()
    this.setState({ currentSectionIndex: 0})
  }

  render() {
    let typesOfEating = this.props.sections.map((types, index) => 
      (<li key={index}>
          <button  type='submit' onClick={this.handleButtonClick(index)}>{types.title}</button>
      </li>)
    )
    
    const currentSection = this.props.sections[this.currentSectionIndex]
    return (
      <div>
        <ul>
          {typesOfEating}
          {currentSection}
        </ul>
      </div>
    )
  }
}

export default Accordion