import { render, screen } from "@testing-library/react";
import Content from "./Content";
import store from "../../App/store";
import { Provider } from "react-redux";
import '@testing-library/jest-dom';


describe('<Content />', () => {
    beforeAll(()=> {
        render(
        <Provider store={store}>
            <Content />
        </Provider>)
    })
    test('renders', () => {
        expect(screen.getByTestId('content')).toBeInTheDocument();
    });
});
