import SubredditMenu from "./SubredditMenu";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../../App/store";

describe('<Subreddit-menu />', () => {
    beforeEach(() => {
        render(
        <Provider store={store}>
            <SubredditMenu />
        </Provider>
        );
    });

    test('renders', () => {
        expect(screen.getByTestId('subreddit-menu')).toBeInTheDocument();
    })
    test('renders the subreddit container', () => {
        expect(screen.getByTestId('subreddit-card-container')).toBeInTheDocument();
    })
})

