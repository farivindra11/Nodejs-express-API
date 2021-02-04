const db = require("../config/db.config.js");

const getAll = async (req, res) => {
  try {
    const user = await db.query("SELECT * FROM tb_user");
    res.json({
      data: user,
      status: 200,
    });
  } catch (error) {
    console.log(error);
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
    const create = await db.query(
      `INSERT INTO tb_user (email, password, nip, nama, level, id_kec) VALUES($1, $2, $3, $4, $5, $6)`,
      [email, password, nip, nama, level, id_kec]
    );

    res.json({
      status: 200,
      data: create,
    });
  } catch (error) {
    console.log(error);
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
