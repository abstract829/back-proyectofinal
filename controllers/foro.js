const { pool } = require('../db/config')

const getForos = async(req,res) => {
    try{
        const resp = await pool.query('SELECT * FROM foro')
        res.json({
            ok:true,
            msg:'Foros enviados correctamente',
            foros: resp.rows
        })
    }catch{
        res.json({
            ok:false,
            msg: 'Error al enviar los foros'
        })
    }
}
const getForoById = async(req,res) => {
    const {id} = req.params
    try{
        const resp = await pool.query('SELECT * FROM foro WHERE id = $1', [id])
        res.json({
            ok:true,
            msg:'Foro enviado correctamente',
            foro: resp.rows[0]
        })
    }catch{
        res.json({
            ok:false,
            msg: 'Error al enviar el foro'
        })
    }
}
const getComentariosByForoId = async(req,res) => {
    const {id} = req.params
    try{
        const resp = await pool.query('SELECT * FROM comentarios WHERE idforo = $1', [id])
        res.json({
            ok:true,
            msg:'Comentarios enviados correctamente',
            comentarios: resp.rows
        })
    }catch{
        res.json({
            ok:false,
            msg: 'Error al enviar los comentarios'
        })
    }
}
module.exports = {
    getForos,
    getComentariosByForoId,
    getForoById
}