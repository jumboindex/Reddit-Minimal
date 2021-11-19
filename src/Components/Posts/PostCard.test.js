import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";

describe('<PostCard />', () => {
    beforeEach(() => {
        render(<PostCard />);
    });
    test('renders', () => {
        expect(screen.getByTestId('post-card')).toBeInTheDocument();
    });
});