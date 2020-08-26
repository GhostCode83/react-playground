import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

const sectionsProp = [

  {title: "Vegan", 
    content: "plants only"},
  {title: "Octo-Ovo Vegetarian", 
    content: "plants, dairy and eggs"},
  {title: "Omnivour", 
    content: "plants and aninimals"}

]

describe('Accordion Component', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div)
  })


  it('renders an empty li when the sections prop is not supplied', () => {
    const tree = renderer
      .create(<Accordion sections={sectionsProp}/>)
      .toJSON()
    expect(tree).toMatchSnapshot();
  })

  it('renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp}/>)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />)
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()

  })

  it('only opens the last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

