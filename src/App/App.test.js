import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

describe('<App />', ()=> {
  beforeAll(()=> {
    render(
    <Provider store={store}>
      <App />
    </Provider>)
  });
  test('renders the Navbar component', ()=> {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
