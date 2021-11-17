import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterMenu from "./FilterMenu";

describe('<FilterMenu />', () => {
    beforeEach(() => {
        render(<FilterMenu />)
    });
    test('renders', () => {
        expect(screen.getByTestId('filter-menu')).toBeInTheDocument();
    });
    test('renders 5 x filter containers', ()=> {
        expect(screen.queryAllByTestId('filter-container')).toHaveLength(5);
    });
});