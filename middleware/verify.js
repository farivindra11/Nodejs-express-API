const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db.config')

const signUp = async (req, res, next) => {
    try {
        // this field for check duplucate username when user sign up
        const { email, nip } = req.body;

        const data = await db.query(`SELECT * FROM tb_user WHERE email=$1 OR nip=$2`, [email, nip])
        
        if(data) {
            res.status(400).json({
                message: "error",
                error: "Email or nip already in use!"
            })
        }


    } catch (error) {
        console.log(error);
    }
}

const signIn = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = { signUp, signIn }