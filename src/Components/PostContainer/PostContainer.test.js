import { render, screen } from "@testing-library/react";
import PostContainer from "./PostContainer";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../../App/store";

describe('<PostContainer />', () => {
    beforeEach(() => {
        render(
        <Provider store={store}>
            <PostContainer />
        </Provider>    );
    })
    test('renders', () => {
        expect(screen.getByTestId('post-container')).toBeInTheDocument();
    });
});