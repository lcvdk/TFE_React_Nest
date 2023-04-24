import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './reducers/people.reduce';

import reduxLogger from 'redux-logger';


const store = configureStore({
    reducer: {
        people: peopleReducer,
        todo: todoReducer,
        nationalize: nationalizeReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware : (getDefaultMiddleware) => [...getDefaultMiddleware(), reduxLogger]
});

export default store;