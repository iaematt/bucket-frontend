import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import File from './pages/File';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/file/:id" component={File} />
        </BrowserRouter>
    );
}