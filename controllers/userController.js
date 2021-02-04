const db = require('../config/db.config')
// const user = require('../models/tb_user')

const getAll = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM tb_user");
    res.json({
      data: data.rows,
      status: 200,
    });
  } catch (error) {
    res.json({
      messege: error,
    });
  }
};

const getById = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
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
        data: data.rows[0]
    });
  } catch (error) {
       res.json({
           status: 500,
           message: error
       });
  }
};

const updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
