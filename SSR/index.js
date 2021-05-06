import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {JssProvider, SheetsRegistry} from 'react-jss';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetch from 'node-fetch';
import { App } from '../src/App.tsx';
import rootReducer from '../src/reducers';
import {
    API_URL
} from '../src/config';
import {
    MOVIES_LOAD_SUCCESS,
    MOVIE_DELETE_FAILURE,
    SET_SEARCH_QUERY
} from '../src/action-types';


function renderHtml(component, preloadedState, sheets) {
    return `
    <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <title>ReactJS_GMP</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
            <style type="text/css" id="server-side-styles">
                ${sheets.toString()}
            </style>
        </head>

        <body>
            <div id="root">${component}</div>
            <div id="modal-root"></div>
            <script>
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/static/main.js"></script>
        </body>

        </html>
    `;
}

function renderRoot(store, Router, context, location, sheets) {
    return (
        <JssProvider registry={sheets}>
            <App
                context={context}
                location={location}
                Router={Router}
                store={store}
            />
        </JssProvider>
    );
}

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/search/:query", (req, res, next) => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const searchQuery = req.params.query;
    const context = {};
    const sheets = new SheetsRegistry();

    fetch(`${API_URL}/movies?search=${searchQuery}&searchBy=title`)
        .then(response => response.json())
        .then(movies => {
            store.dispatch({
                type: SET_SEARCH_QUERY,
                payload: searchQuery
            });

            store.dispatch({
                type: MOVIES_LOAD_SUCCESS,
                payload: movies
            });
        })
        .catch((err) => {
            store.dispatch({
                type: MOVIE_DELETE_FAILURE,
                payload: err
            });
        })
        .then(() => {
            if (context.url) {
                res.writeHead(302, {
                    Location: context.url,
                });
                res.end();
            }

            const component = ReactDOMServer.renderToString(renderRoot(store, StaticRouter, context, req.url, sheets));

            const preloadedState = store.getState();
            const html = renderHtml(component, preloadedState, sheets);

            res.send(html);
        });

    // initial render
    ReactDOMServer.renderToString(renderRoot(store, StaticRouter, context, req.url, sheets));
});

app.get("*", (req, res) => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const context = {};
    const sheets = new SheetsRegistry();

    // initial render
    ReactDOMServer.renderToString(renderRoot(store, StaticRouter, context, req.url, sheets));

    if (context.url) {
        res.writeHead(302, {
            Location: context.url,
        });
        res.end();
    }
    const component = ReactDOMServer.renderToString(renderRoot(store, StaticRouter, context, req.url, sheets));

    const preloadedState = store.getState();
    const html = renderHtml(component, preloadedState, sheets);

    res.send(html);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.info(`Express listening on port ${port}`);
});
