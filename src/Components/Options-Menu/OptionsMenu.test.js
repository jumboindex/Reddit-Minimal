import OptionsMenu from './OptionsMenu';
import { ReactComponent as NightMode } from './Icons/NightMode.svg';
import { ReactComponent as Github } from './Icons/Github.svg';
import { ReactComponent as RedditIcon } from './Icons/RedditIcon.svg';
import { shallow } from 'enzyme';

describe('Options Menu', ()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<OptionsMenu />);
    });  
    it('renders the nightmode icon', () => {
        expect(wrapper.containsMatchingElement(NightMode)).toEqual(true);
    });
    it('renders the github icon', () => {
        expect(wrapper.containsMatchingElement(Github)).toEqual(true);
    });
    it('renders the Reddit icon', () => {
        expect(wrapper.containsMatchingElement(RedditIcon)).toEqual(true);
    });
    it('renders the checkbox / nightmode element', () => {
        expect(wrapper.containsMatchingElement(<input type="checkbox" id="checkbox" />)).toEqual(true);
    });
});