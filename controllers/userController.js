const db = require("../config/db.config.js");

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

    await db.query(
      "INSERT INTO tb_user (email, password, nip, nama, level, id_kec) VALUES($1, $2, $3, $4, $5, $6)",
      [email, password, nip, nama, level, id_kec]
    );

    const data = ({
      email,
      password,
      nip,
      nama,
      level,
      id_kec,
    });

    res.json({
      status: 200,
      message: "User berhasil ditambahkan",
      data: data,
    });
  } catch (error) {
       res.json({
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
