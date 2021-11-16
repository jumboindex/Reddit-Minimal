import { render, screen } from "@testing-library/react";
import Content from "./Content";


describe('<Content />', () => {
    beforeAll(()=> {
        render(<Content />)
    })
    test('renders', () => {
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });
});
