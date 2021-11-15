import Navbar from "./Navbar";
import { render, screen } from '@testing-library/react'


describe('<Navbar />', ()=> {
    beforeEach(() => {
        render(<Navbar />);
    });
    test('the navbar renders',() => {
        expect(screen.queryByTestId('navbar')).toBeInTheDocument()
    });
    test('renders the Reddit logo', ()=> {
        expect(screen.queryByTestId('reddit-logo')).toBeInTheDocument();
    });
    test('renders the <Searchbar /> element', ()=> {
        expect(screen.queryByTestId('searchbar')).toBeInTheDocument();
    });
    test('renders the <MenuButton />', () => {
        expect(screen.queryByTestId('menu-button-component')).toBeInTheDocument();
    });
});