import { shallow } from 'enzyme';
import MenuButton from './MenuButton';
import OptionsMenu from '../Options-Menu/OptionsMenu';
import { ReactComponent as MenuIcon } from './Menu-Icons/three-dots-vertical.svg';

describe('menu button', ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MenuButton />);
    });
    test('renders the toggle menu button', ()=>{
        expect(wrapper.find('.menu-btn').exists()).toEqual(true); 
     });
    test('renders the toggle menu icon', ()=>{
        expect(wrapper.find(MenuIcon).exists()).toEqual(true); 
     });
    test('Onclick renders the options menu', ()=>{
        wrapper.find('.menu-btn').simulate('click');
        expect(wrapper.find(OptionsMenu)).toBeTruthy;
     });
});