import Searchbar from "./Searchbar";
import { shallow } from 'enzyme';

describe('Searchbar', ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<Searchbar />);
    });  
    it('renders an textinput element', () => {
        expect(wrapper.matchesElement(<input type='text' placeholder='Search..'></input>)).toEqual(true);
    });
});