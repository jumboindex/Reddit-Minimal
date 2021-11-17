import SubredditMenu from "./SubredditMenu";
import { render, screen } from "@testing-library/react";

describe('<Subreddit-menu />', () => {
    beforeEach(() => {
        render(<SubredditMenu />);
    });

    test('renders', () => {
        expect(screen.getByTestId('subreddit-menu')).toBeInTheDocument();
    })
    test('renders the subreddit container', () => {
        expect(screen.getByTestId('subreddit-card-container')).toBeInTheDocument();
    })
})