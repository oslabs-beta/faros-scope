import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import { Sequelize } from 'sequelize';

import 'dotenv/config';

const app: Application = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.PG_URI || '';

// connect to db
const sequelize = new Sequelize(URI); // Example for postgres

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

app.use('*', (req: Request, res: Response, next: NextFunction): void => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

export default sequelize;
