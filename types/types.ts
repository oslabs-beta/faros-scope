import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export interface IDefaultError {
  log: string;
  status: number;
  message: string | object;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string;
}

export interface IMetrics {
  metrics: {};
}
