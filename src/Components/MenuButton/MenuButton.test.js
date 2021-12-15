import MenuButton from './MenuButton';
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../App/store';
import { renderWithRouter } from '../../test-utils';


describe('menu button', ()=> {
    beforeEach(() => {
        renderWithRouter(
        <Provider store={store}>
            <MenuButton />
         </Provider>)
    });
    test('renders the toggle menu button', ()=>{
        expect(screen.getByTestId('menu-button')).toBeInTheDocument(); 
     });
     test('renders the toggle menu icon', ()=>{
        expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
     });
     test('Onclick renders the options menu', ()=>{
        userEvent.click(screen.getByTestId('menu-button'));
        expect(screen.getByTestId('options-menu')).toBeInTheDocument();
     });
     test('Second click unmounts the options menu', async ()=>{
        //first click - options-menu appears!
        userEvent.click(screen.getByTestId('menu-button'));
        // store options-menu so we can use for assertion
        const optionsMenu = screen.queryByTestId('options-menu')
        //second click - menu is unmounted
        userEvent.click(screen.getByTestId('menu-button'));
        await waitForElementToBeRemoved(()=> screen.getByTestId('options-menu'));
        expect(optionsMenu).not.toBeInTheDocument();
     });
     test('CSS animations run when the options menu enters and leaves the DOM', async ()=>{
        //first click - options-menu appears!
        userEvent.click(screen.getByTestId('menu-button'));
        // store options-menu so we can use for assertion
        const optionsMenu = screen.queryByTestId('options-menu')
        // check that CSS animation classes -enter and -enter-active exist
        expect(optionsMenu).toHaveClass('options-menu-enter')
        expect(optionsMenu).toHaveClass('options-menu-enter-active')
        //second click - menu is unmounted
        userEvent.click(screen.getByTestId('menu-button'));
        // check that CSS animation classes options-menu-exit and options-menu-exit-active exist
        expect(optionsMenu).toHaveClass('options-menu-exit')
        expect(optionsMenu).toHaveClass('options-menu-exit-active')
     });
});


