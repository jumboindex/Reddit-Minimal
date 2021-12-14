import { render, screen } from "@testing-library/react";
import Searchbar from "./Searchbar";
import '@testing-library/jest-dom';
import store from "../../App/store";
import { Provider } from "react-redux";

describe('Searchbar', ()=> {
    beforeEach(()=> {
      render(
      <Provider store={store}>
        <Searchbar />
      </Provider>);
    });  
    it('renders an text input element', () => {
        expect(screen.getByTestId('searchbar')).toBeInTheDocument();
    });
});