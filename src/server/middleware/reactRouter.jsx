import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router';
import reducers from '../../reducers';
import routes from '../../routes';

function renderFullPage(renderedContent, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${renderedContent}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/dist/main.js"></script>
      </body>
    </html>
   `
}

export default function(req, res, next) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.      
            
            const initialState = {
                routing: {
                    location: renderProps.location
                },
                posts: {
                    items: []
                }
            };
            const store = createStore(reducers, initialState);
            var rendered = renderToString(
                <Provider store={store}>
                    <div>
                        <RouterContext {...renderProps} />
                    </div>
                </Provider>
            )
            res.status(200).send(renderFullPage(rendered, initialState));
        } else {
            res.status(404).end();
        }
    })
}
