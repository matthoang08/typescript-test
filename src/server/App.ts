import * as express from 'express';
import { Express } from 'express'; // tslint:disable-line: no-duplicate-imports
import * as React from 'react';
// import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import Counter from '../containers//Counter';
import html from './html';

class App {
  public express: Express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!',
      });
    });
    router.use(express.static('dist'));
    router.get('/html', (req, res) => {
      const body = renderToString(React.createElement(Counter));
      res.send(html({ body }));
    });
    this.express.use('/', router);
  }
}

export default new App().express;
