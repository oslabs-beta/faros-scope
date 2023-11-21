import express, { NextFunction, Response, Request } from 'express';

const metricsController = {
  async getMetrics(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await fetch(
        'http://localhost:9090/api/v1/query?query=kube_node_info',
      );
      const json = await data.json();
      res.locals.metrics = json;
      return next();
    } catch (error) {
      return next({
        log: 'Problem in MetricsController.getMetrics',
        status: 500,
        message: { err: 'Unknown Error Occurred' }
      })
    }
  },
};

export default metricsController;
