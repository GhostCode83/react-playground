import React from 'react';

class Tabs extends React.Component {
  static defaultProps = { tabs: [] };
  //state is here without the constructor...
  //key value pair, object.  
  state = {
    currentTabIndex: 0
  };

  //function that changes state of currentTabIndex
  handleButtonClick(index) {
    this.setState({currentTabIndex: index})
  }
  
  renderButtons() {
    //what is happening within the map exactly?
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ))
  }

  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }


  render(){
    return (
    <div>
      {this.renderButtons()}
      {!!this.props.tabs.length && this.renderContent()}
    </div>
    )
  }
}

export default Tabs;