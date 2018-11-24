const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        server.get('/pegasus/:id', (req, res) => {
            const actualPage = "/pegasus";
            const queryParams = {id: req.params.id};
            app.render(req, res, actualPage, queryParams);
        });
        server.get('/pegasus/', (req, res) => {
            const actualPage = "/pegasus";
            const queryParams = {id: req.params.id};
            app.render(req, res, actualPage, queryParams);
        });

        server.get('/products/:id', (req, res) => {
            const actualPage = "/products";
            const queryParams = {id: req.params.id};
            app.render(req, res, actualPage, queryParams);
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3000, (err) => {
            if (err) throw err;
        })
    })
    .catch((ex) => {
        process.exit(1)
    });
