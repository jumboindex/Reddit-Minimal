import Navbar from "./Navbar";
import Searchbar from "../Searchbar/Searchbar";
import { shallow } from 'enzyme';

describe('<Navbar />', ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navbar />);
    } )
    test('renders the Reddit logo', ()=> {
        expect(wrapper.find('.logo').exists()).toEqual(true);
    });
    test('renders the searchbar element', ()=> {
        expect(wrapper.find(Searchbar).exists()).toEqual(true);
    })
    test('renders the three dots icon', ()=>{
       expect(wrapper.find('.menu').exists()).toEqual(true); 
    })
});