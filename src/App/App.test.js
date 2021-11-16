import { render, screen } from '@testing-library/react';
import App from './App';


describe('<App />', ()=> {
  beforeAll(()=> {
    render(<App />)
  });
  test('renders the Navbar component', ()=> {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
  /* test('renders the content component', () => {
    expect(screen.getByTestId('content')).toBeInTheDocument();
  }); */
});
