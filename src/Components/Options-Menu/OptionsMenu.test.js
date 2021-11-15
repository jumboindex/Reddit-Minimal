import OptionsMenu from './OptionsMenu';
import { render, screen } from '@testing-library/react';


describe('Options Menu', ()=> {
    beforeEach(()=> {
        render(<OptionsMenu />);
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