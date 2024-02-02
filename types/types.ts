// import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

import { rootReducer } from '../client/store/store';

export type RootState = ReturnType<typeof rootReducer>;

export interface Node {
  id: string;
  nodeName: string;
  pods: Pod[];
}
export interface Pod {
  id: string;
  name: string;
  nodeId: string;
  namespaceId?: string;
  containers: Container[];
}

export interface Container {
  id: string;
  name: string;
  podId: string;
  image: string;
}

export interface Metrics {
  cpuUsage: number;
  memUsage: number;
  type: string;
  cpuUsagePct: number;
}

export interface Entity {}

export interface ClusterEvent {
  apiVerson: string;
  kind: string;
  metadata: { uid: string; [key: string]: any };
  entities: Entity[];
}

export interface IDefaultError {
  log: string;
  status: number;
  message: string | object;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// export class User extends Model<
//   InferAttributes<User>,
//   InferCreationAttributes<User>
// > {
//   declare id: number;
//   declare firstName: string;
//   declare lastName: string;
//   declare email: string;
//   declare password: string;
// }

export interface IMetrics {
  metrics: {};
}
