import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../../App/store';
import { renderWithRouter } from '../../test-utils';
import FilterMenu from "./FilterMenu";


describe('<FilterMenu />', () => {
    beforeEach(() => {
        renderWithRouter(
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