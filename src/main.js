import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Starter from './containers/Starter';
import store from './store';
import { BrowserRouter } from 'react-router-dom'


render(
    // wrap the App in the Provider and pass in the store
    <Provider store={store}>
        <BrowserRouter>
            <Starter />
        </BrowserRouter>
    </Provider>
    , document.getElementById('container')
);