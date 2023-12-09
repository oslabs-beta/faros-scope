import express from 'express';
import metricsController from '../controllers/metricsController';
const Router = express.Router();

Router.get('/metrics', metricsController.getMetrics, (_req, res) => {
  if (!res.locals?.metrics) res.status(500).send({message:'No metrics found'});
  res.status(200).send(res.locals?.metrics);
});

export default Router;
