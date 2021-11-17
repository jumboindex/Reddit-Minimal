import { screen, render } from "@testing-library/react";
import SubredditCard from "./SubredditCard";

describe('<SubredditCard />', () => {
    beforeEach(() => {
        render(<SubredditCard />);
    })
    test('renders', () => {
        expect(screen.getByTestId('subreddit-card')).toBeInTheDocument();
    })
})