import { render, screen } from "@testing-library/react";
import Searchbar from "./Searchbar";


describe('Searchbar', ()=> {
    beforeEach(()=> {
      render(<Searchbar />);
    });  
    it('renders an text input element', () => {
        expect(screen.getByTestId('searchbar')).toBeInTheDocument();
    });
});