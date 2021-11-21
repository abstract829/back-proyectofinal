const { pool } = require('../db/config')
const { generarJWT } = require('../helpers/jwt')

const getUserByEmail = async(req,res) =>{
    const {email} = req.body
    try{
        const resp = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])
        if(resp.rows.length > 0){
            const user = resp.rows[0]
            const token = await generarJWT( user.id, user.name )
            res.json({
                ok:true,
                msg:'Usuario enviado correctamente',
                user,
                token
            })
        }else{
            res.json({
                ok:false,
                msg: 'El usuario no existe'
            })
        }
        
    }
    catch(err){
        res.json({
            ok:false,
            msg: 'Error al enviar el usuario',
        })
    }
}
const getUserById = async(req,res) =>{
    const {id} = req.params
    try{
        const resp = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])
            const user = resp.rows[0]
            res.json({
                ok:true,
                msg:'Usuario enviado correctamente',
                user,
            })
    }
    catch(err){
        res.json({
            ok:false,
            msg: 'Error al enviar el usuario',
        })
    }
}
const crearUsuario = async(req,res) =>{
    const { email, tipo_user, name, password } = req.body
    // await pool.query('INSERT INTO users(name, email, password, tipo_user) VALUES ($1, $2, $3, $4)', [name,email,password,tipo_user], (err,res)=>{
    //     console.log('error', err)
    //     console.log('resp', res)
    // })
    // res.json({
    //     ok:false
    // })

    try {
        const resp = await pool.query('INSERT INTO users(name, email, password, tipo_user) VALUES ($1, $2, $3, $4)', [name,email,password,tipo_user])
        const user = await pool.query('SELECT * FROM users where email = $1', [email])
        const token = await generarJWT( user.rows[0].id, user.rows[0].name )
        res.json({
            ok:true,
            msg:'Usuario creado correctamente',
            user : user.rows[0],
            token
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:`Error al registrar el usuario`,
            error
        })
    }
}

const revalidarToken = async(req, res) => {
    const { id, name } = req;
    // Generar el JWT
    const resp = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])

    const token = await generarJWT( id, name );
    return res.json({
        ok: true,
        user: resp.rows[0],
        token
    });
}
const editarUser = async(req,res) => {
    const { id, name, email, tipo_user, password } = req.body
    try {
        const resp = await pool.query('UPDATE users SET name = $2, email = $3, tipo_user = $4, password = $5 WHERE id = $1',[id,name,email,tipo_user,password])
        res.json({
            ok:true,
            msg:`Usuario con id ${id} editado correctamente`,
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:`Error editando el usuario con id ${id}`,
            error
        })
    }
}
const agregarFoto = async(req,res) =>{
    const { img, id } = req.body
    try {
        const resp = await pool.query('UPDATE users SET img = $1 WHERE id = $2',[img,id])
        res.json({
            ok:true,
            msg: `Imagen agregada correctamente en el usuario con id : ${id}`,
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Error al agregar la img',
            error
        })
    }
}
module.exports = {
    getUserByEmail,
    revalidarToken,
    crearUsuario,
    editarUser,
    agregarFoto,
    getUserById
}