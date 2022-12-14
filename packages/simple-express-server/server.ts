import express from 'express';
import _ from "lodash";
import { QueryPayload } from "@fsegall/simple-shared-data";

const app = express();

const port = '3001';

app.use((_req, res, next) => {
    // Allow any website to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    // Continue to next middleware
    next();
  });

app.get("/", (_req, res) => {
const responseData: QueryPayload = {
  payload: _.snakeCase("Server data returned successfully"),
};

res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
