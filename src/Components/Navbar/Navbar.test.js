import Navbar from "./Navbar";
import Searchbar from "../Searchbar/Searchbar";
import OptionsMenu from "../Options-Menu/OptionsMenu";
import { shallow } from 'enzyme';

describe('<Navbar />', ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navbar />);
    });
    test('renders the Reddit logo', ()=> {
        expect(wrapper.find('.logo').exists()).toEqual(true);
    });
    test('renders the searchbar element', ()=> {
        expect(wrapper.find(Searchbar).exists()).toEqual(true);
    });
    test('renders a menu button', () => {
        expect(wrapper.find('button.menu-btn').exists()).toEqual(true);
    });
    test('renders the three dots icon', ()=>{
       expect(wrapper.find('.menu').exists()).toEqual(true); 
    });
    test('renders the options menu', ()=>{
        expect(wrapper.find(OptionsMenu).exists()).toEqual(true); 
     });
});