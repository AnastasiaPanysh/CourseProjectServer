// import { config } from "dotenv";
import { Pool } from "pg";

// config();
// const { USER_DB, HOST_DB, NAME_DB, PASSWORD_DB, PORT_DB } = process.env;

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres',
  password:'fegaNaPa27_11',
  port:'5432'
});

export default pool ;
