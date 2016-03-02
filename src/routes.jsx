import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Blog from './containers/Blog';
import Editor from './containers/Editor';
import StoryContainer from './containers/StoryContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/blog" component={Blog} />  
        <Route path="/blog/:slug" component={StoryContainer} />
        <Route path="/editor" component={Editor} />  
    </Route>
);