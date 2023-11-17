import express, { Application, Request, Response, NextFunction } from 'express';
import Router from './routers/router';
import path from 'path';
import { Sequelize } from 'sequelize';

import 'dotenv/config';

const app: Application = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.PG_URI || '';

// connect to db
const sequelize = new Sequelize(URI); // Example for postgres

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));
app.use('/api', Router)

// catch all route handler
app.use('*', (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

export default sequelize;
