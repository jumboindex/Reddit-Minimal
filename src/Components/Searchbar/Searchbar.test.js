import Searchbar from "./Searchbar";
import { shallow } from 'enzyme';

describe('Searchbar', ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<Searchbar />);
    });  
    it('renders an text input element', () => {
        expect(wrapper.containsMatchingElement(<input type='text' placeholder='Search..'></input>)).toEqual(true);
    });
});