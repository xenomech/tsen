import { DataSource } from "typeorm";
import { User } from "../models";

const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 54321,
  username: process.env.POSTGRES_USER || "xenomech",
  password: process.env.POSTGRES_PASSWORD || "xenomech",
  database: process.env.POSTGRES_DB || "tsen",
  entities: [User],
  synchronize: true,
});

export default appDataSource;
