import pool from "../configs/db.js";

export const createSchool = async (data) => {
  const { name, address, latitude, longitude } = data;

  const query = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;

  const [result] = await pool.execute(query, [
    name,
    address,
    latitude,
    longitude,
  ]);

  return result.insertId;
};

export const getAllSchools = async () => {
  const [rows] = await pool.execute("SELECT * FROM schools");
  return rows;
};
