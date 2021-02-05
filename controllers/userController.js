const db = require("../config/db.config");
// const user = require('../models/tb_user')

const getAll = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM tb_user");
    res.json({
      status: 200,
      message: "You have successfully get data",
      data: data.rows,
    });
  } catch (error) {
    res.status(500).json({
      messege: error,
    });
  }
};

const getById = async (req, res) => {
  try {
    const id = req.params.id_user;

    const data = await db.query(`SELECT * FROM tb_user WHERE id_user = ${id}`);

    res.json({
      status: 200,
      message: "You have successfully get data by id",
      data: data.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password, nip, nama, level, id_kec } = req.body;
    const data = await db.query(
      "INSERT INTO tb_user (email, password, nip, nama, level, id_kec) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [email, password, nip, nama, level, id_kec]
    );
    res.json({
      status: 200,
      message: "You have successfully added data",
      data: data.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id_user;

    const { email, password, nip, nama, level, id_kec } = req.body;

    const data = await db.query(
      "UPDATE tb_user SET email=$1, password=$2, nip=$3, nama=$4, level=$5, id_kec=$6 WHERE id_user=$7 RETURNING *",
      [email, password, nip, nama, level, id_kec, id]
    );

    res.json({
      status: 200,
      message: "You have successfully update data",
      data: data.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: error
    })
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id_user;
    const data = await db.query('DELETE FROM tb_user WHERE id_user=$1', 
    [id])

    res.json({
      status: 200,
      message: "You successfully delete data"
    })
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
