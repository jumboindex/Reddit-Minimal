import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../../App/store";

describe('<PostCard />', () => {
    beforeEach(() => {
        render(
        <Provider store={store}>
            <PostCard />
        </Provider>
        );
    });
    test('renders', () => {
        expect(screen.getByTestId('post-card')).toBeInTheDocument();
    });
});