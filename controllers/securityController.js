const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const getToken = async (req, res) => {

    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({ 
            success: false,
            message: 'Usuario y contraseña son obligatorios.',
            data: null
         });
    }

    if(username != process.env.USER_ALLOWED) {
        return res.status(404).json({ 
            success: false,
            message: 'Usuario no encontrado.',
            data: null
         });
    } 
    //const hash = await bcrypt.hash(password, 10);
    const passwordMatch = await bcrypt.compare(password, process.env.PASSWORD);

    if(!passwordMatch) {
        return res.status(401).json({ 
            success: false,
            message: 'Contraseña incorrecta',
            data: null });
    }

    const token = jwt.sign({ user: username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION})

    res.status(200).json({ token });
}

module.exports = {
    getToken: getToken
}