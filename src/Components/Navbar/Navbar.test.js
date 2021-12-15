import Navbar from "./Navbar";
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from '../../App/store';
import { renderWithRouter } from "../../test-utils";


describe('<Navbar />', ()=> {
    beforeEach(() => {
        renderWithRouter(
        <Provider store={store}>
            <Navbar />
        </Provider>);
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
