import { screen } from "@testing-library/react";
import Content from "./Content";
import store from "../../App/store";
import { Provider } from "react-redux";
import '@testing-library/jest-dom';
import { renderWithRouter } from "../../test-utils";

window.scrollTo = jest.fn();

describe('<Content />', () => {
    beforeAll(()=> {
        renderWithRouter(
        <Provider store={store}>
            <Content />
        </Provider>)
    });

    afterEach(() => {
        jest.resetAllMocks();
    });
      
      afterAll(() => {
        jest.clearAllMocks();
    });

    test('renders', () => {
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });
});
