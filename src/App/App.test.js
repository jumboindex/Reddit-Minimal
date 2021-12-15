import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

window.scrollTo = jest.fn();


describe('<App />', ()=> {
  beforeAll(()=> {
      render(<App />)
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
    
    afterAll(() => {
      jest.clearAllMocks();
    });

    test('App renders', () => {
      expect(screen.getByTestId('App')).toBeInTheDocument();
    })
});

