import pool from "../DB";
import { iUser } from "../interfaces/interfaces";

async function getUserByEmailDB(email): Promise<iUser[]> {
  const client = await pool.connect();
  const sql = `SELECT * FROM users WHERE email=$1`;
  return (await client.query(sql, [email])).rows;
}

async function registrationUserDB(
  name,
  email,
  password,
  role,
  provaiderName,
  AccesToken,
  ExpirationTime,
  RefreshToken,
): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const sql = `INSERT INTO users( name, email, password, role, provaider_name,access_token,expiration_time,refresh_token) 
        VALUES($1,$2,$3,$4,$5,$6,$7,$8) returning *`;
    const data: iUser[] = (
      await client.query(sql, [
        name,
        email,
        password,
        role,
        provaiderName,
        AccesToken,
        ExpirationTime,
        RefreshToken,
      ])
    ).rows;
    await client.query("COMMIT");
    return data;
  } catch (error) {
    await client.query("ROLLBACK");
    return [];
  }
}

export { getUserByEmailDB, registrationUserDB };
