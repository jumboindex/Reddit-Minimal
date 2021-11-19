import { render, screen } from "@testing-library/react";
import PostContainer from "./PostContainer";

describe('<PostContainer />', () => {
    beforeEach(() => {
        render(<PostContainer />);
    })
    test('renders', () => {
        expect(screen.getByTestId('post-container')).toBeInTheDocument();
    });
});