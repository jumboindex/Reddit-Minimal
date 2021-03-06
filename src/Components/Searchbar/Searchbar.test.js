import { screen } from "@testing-library/react";
import Searchbar from "./Searchbar";
import '@testing-library/jest-dom';
import store from "../../App/store";
import { Provider } from "react-redux";
import { renderWithRouter } from "../../test-utils";

describe('Searchbar', ()=> {
    beforeEach(()=> {
      renderWithRouter(
      <Provider store={store}>
        <Searchbar />
      </Provider>);
    });  
    it('renders an text input element', () => {
        expect(screen.getByTestId('searchbar')).toBeInTheDocument();
    });
});