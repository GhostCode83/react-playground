import React from 'react';

class Accordion extends React.Component {
static defaultProps = {
  sections: []
}

  state = {
    currentSectionIndex: null
  }

  handleButtonClick = (index) => {
    this.setState({ currentSectionIndex: index})
  }

  renderList(section, index, currentSectionIndex) {
    return (
      <li key={index}>
          <button  
            type='submit' 
            onClick={() => this.handleButtonClick(index)}
          >
            {section.title}
          </button>
          {
          (currentSectionIndex === index) && 
          <p>{section.content}</p>}
      </li>)
  }
  
  render() {
    const { currentSectionIndex } = this.state
    const { sections } = this.props
    return (
      <div>
        <ul>
          {sections.map((section, index) =>
          this.renderList(section, index, currentSectionIndex))}
        </ul>
      </div>
    )
  }
}

export default Accordion
