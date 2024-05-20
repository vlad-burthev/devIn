import { envDataBase, envVariables } from './envVariables';

export const dbConfiguration = () => ({
  port: parseInt(envVariables.port, 10) || 3000,
  database: {
    dialect: 'postgres',
    db_name: envDataBase.db_name,
    db_password: envDataBase.db_password,
    db_owner: envDataBase.db_owner,
    db_host: envDataBase.db_host,
    db_port: envDataBase.db_port,
  },
});
