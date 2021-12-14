import { screen, render } from "@testing-library/react";
import SubredditCard from "./SubredditCard";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../../App/store";
import { Router, Route, Routes } from "react-router-dom";
import SubredditVeiw from "../SubredditView/SubredditView";

const data = { data: {
    display_name_prefixed: "r/gaming", 
    subscribers: 31186663, 
    icon_img: "https://b.thumbs.redditmedia.com/0PgZl68jAxA6T1BH6uvUQ5Bz1F1GrrJLCL8oi2Gz0Ak.png", 
    display_name: "gaming"
    }
}


describe('<SubredditCard />', () => {
    beforeEach(() => {
        render(
        <Provider store={store}>
            <Router>
        
                <SubredditCard data={data}/>
            </Router>
        </Provider>
        );
    })
    test('renders', () => {
        expect(screen.getByTestId('subreddit-card')).toBeInTheDocument();
    })
})
