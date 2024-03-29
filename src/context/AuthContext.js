import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';


const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        //make api request to signup with that email and password
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            console.log(err.response.data);
        }
        //if we sign up, modify our state, and say that we are authenticated

        //if signup fail, we need to reflect an error message 
        //sowhere
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        //try to signin
        //Handle success by updating state
        //handle failure by showing error message
    };
};

const signout = (dispatch) => {
    return () => {
        //somehow signout
    }
}
export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup},
    { isSignedIn: false }
);