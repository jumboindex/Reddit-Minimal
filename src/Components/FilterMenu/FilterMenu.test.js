import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';
import store from '../../App/store';
import FilterMenu from "./FilterMenu";


describe('<FilterMenu />', () => {
    beforeEach(() => {
        render(
        <Provider store={store}>
            <FilterMenu />
        </Provider>
        )
    });
    test('renders', () => {
        expect(screen.getByTestId('filter-menu')).toBeInTheDocument();
    });
    test('renders 5 x filter containers', ()=> {
        expect(screen.queryAllByTestId('filter-container')).toHaveLength(5);
    });
});