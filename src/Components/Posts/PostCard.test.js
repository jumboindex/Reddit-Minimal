import { screen } from "@testing-library/react";
import PostCard from "./PostCard";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../../App/store";
import { renderWithRouter } from "../../test-utils";


const data = { data: { title: 'dummy title', 
                        subreddit_name_prefixed: 'r/react-testing', 
                        author: 'jest', 
                        ups: 105060, 
                        post_hint: '', 
                        url: 'https://i.redd.it/4kshmu9m8n581.jpg', 
                        media: null, 
                        subreddit: 'react-testing', 
                        id: 'rgrq8j' }
            } 



describe('<PostCard />', () => {
    beforeEach(() => {
        renderWithRouter(
        <Provider store={store}>
            <PostCard data={data} />
        </Provider>
        );
    });
    test('renders', () => {
        expect(screen.getByTestId('post-card')).toBeInTheDocument();
    });
});