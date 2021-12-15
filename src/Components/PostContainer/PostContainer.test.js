import { screen } from "@testing-library/react";
import PostContainer from "./PostContainer";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../../App/store";
import { renderWithRouter } from "../../test-utils";
import data from './test-data/test-data.json';

window.scrollTo = jest.fn();

describe('<PostContainer />', () => {
    beforeEach(() => {
        renderWithRouter(
        <Provider store={store}>
            <PostContainer data={data} />
        </Provider>    );
    })

    afterEach(() => {
        jest.resetAllMocks();
      });
      
      afterAll(() => {
        jest.clearAllMocks();
      });

    test('renders', async () => {
        expect( await screen.findByTestId('post-container')).toBeInTheDocument();
    });
});