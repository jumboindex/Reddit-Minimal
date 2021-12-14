import OptionsMenu from './OptionsMenu';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import store from '../../App/store';
import { Provider } from 'react-redux';

describe('Options Menu', ()=> {
    beforeEach(()=> {
        render(
        <Provider store={store}>
            <OptionsMenu />
        </Provider>
        );
    }); 
    it('renders the options menu', () => {
        expect(screen.getByTestId('options-menu')).toBeInTheDocument();
    })
    it('renders the nightmode icon', () => {
        expect(screen.queryByTestId('night-mode-icon')).toBeInTheDocument();
    });
    it('renders the github icon', () => {
        expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    });
    it('renders the Reddit icon', () => {
        expect(screen.getByTestId('reddit-icon')).toBeInTheDocument();
    });
    it('renders the nightmode checkbox / nightmode slider', () => {
        expect(screen.getByTestId('nightmode-checkbox')).toBeInTheDocument();
        expect(screen.getByTestId('nightmode-slider')).toBeInTheDocument();
    });
});