import { shallow } from 'enzyme';
import Navbar from "./Navbar";
import Searchbar from "../Searchbar/Searchbar";
import MenuButton from '../MenuButton/MenuButton';


describe('<Navbar />', ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navbar />);
    });
    test('renders the Reddit logo', ()=> {
        expect(wrapper.find('.logo').exists()).toEqual(true);
    });
    test('renders the <Searchbar /> element', ()=> {
        expect(wrapper.find(Searchbar).exists()).toEqual(true);
    });
    test('renders the <MenuButton />', () => {
        expect(wrapper.find(MenuButton).exists()).toEqual(true);
    });
});