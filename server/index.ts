import express, { Application, Request, Response, NextFunction } from 'express';
import history from 'connect-history-api-fallback'
import Router from './routers/router';
import path from 'path';
import morgan from 'morgan';
// import { Sequelize } from 'sequelize';

import 'dotenv/config';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// const URI = process.env.PG_URI || '';

// connect to db
// const sequelize = new Sequelize(URI); // Example for postgres

// middleware
app.use(morgan('tiny'))
app.use(history());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../build')));
// app.use('/assets', express.static(path.join(__dirname, '../client/assets')));
app.use('/api', Router)

// catch all route handler
app.use('*', (_req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  } 
  const errorObj = { ...defaultError, ...(err instanceof Error ? { message: { err: err.message } } : err) };
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message); 
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

// export default sequelize;
