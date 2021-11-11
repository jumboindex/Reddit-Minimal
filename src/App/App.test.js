import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from '../Components/Navbar/Navbar';
import { shallow } from 'enzyme'


describe('App', ()=> {
  test('Renders the Navbar component', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Navbar).exists()).toEqual(true);
  })
});
