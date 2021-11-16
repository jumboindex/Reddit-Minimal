import { render, screen } from "@testing-library/react";
import FilterMenu from "./FilterMenu";

describe('<Filter />', () => {
    beforeAll(() => {
        render(<FilterMenu />)
    });
    test('renders', () => {
        expect(screen.getByTestId('filter-menu')).toBeInTheDocument();
    })
    test('renders 5 x filter containers', ()=> {
        expect(screen.getByTestId('filter-container')).toEqual(5);
    })
})