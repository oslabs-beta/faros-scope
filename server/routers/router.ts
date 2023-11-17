import express from 'express';
import metricsController from '../controllers/metricsController';
const Router = express.Router();

Router.get('/metrics', metricsController.getMetrics, (req, res) => {
  if (!res.locals?.metrics) res.status(500).send('No metrics found');
  res.status(200).send(res.locals?.metrics);
});

export default Router;
