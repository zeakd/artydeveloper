import express from 'express';
import path from 'path';
import proxy from 'proxy-middleware';
import bodyParser from 'body-parser';
import url from 'url';

import reactRouterMiddleware from './middleware/reactRouter';
import { apiRouter } from './routers';

var app = express();

app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set("env", process.env.NODE_ENV || "development");
if (__DEV__) {
    app.use('/dist', proxy(url.parse('http://localhost:3001/dist')));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');
// app.set("host", process.env.HOST || "0.0.0.0");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../../public')));
app.use(reactRouterMiddleware);
app.use('/api', apiRouter);



export default app;