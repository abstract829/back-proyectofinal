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
const addComentario = async(req,res) =>{
    const {iduser, idforo, comentario} = req.body
    try {
        const resp = await pool.query('INSERT INTO comentarios(iduser, idforo, comentario) VALUES($1,$2,$3)',[iduser, idforo, comentario])
        res.json({
            ok:true,
            msg: 'Comentario agregado correctamente',
            resp: resp.rows
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Error agregando comentario',
            error
        })
    }
}
const delComentario = async(req,res) =>{
    const {iduser, idforo, comentario} = req.body
    try {
        const resp = await pool.query('DELETE FROM comentarios WHERE iduser = $1 AND idforo = $2 AND comentario = $3',[iduser, idforo, comentario])
        res.json({
            ok:true,
            msg: 'Comentario borrado correctamente',
            resp: resp.rows
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Error borrando comentario',
            error
        })
    }
}
const addForo = async(req,res) =>{
    const {title, desc, creado_por} = req.body
    try {
        const resp = await pool.query('INSERT INTO foro(title, "desc", creado_por, fecha) VALUES($1,$2,$3,now())',[title, desc, creado_por])
        res.json({
            ok:true,
            msg: 'Foro agregado correctamente',
            resp: resp.rows
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Error agregando Foro',
            error
        })
    }
}
const delForo = async(req,res) =>{
    const {id} = req.params
    try {
        const resp = await pool.query('DELETE FROM foro WHERE id = $1',[id])
        res.json({
            ok:true,
            msg: `Foro con id : ${id}, eliminado correctamente`,
            resp: resp.rows
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:`Error eliminando el foro con id : ${id}`,
            error
        })
    }
}
module.exports = {
    getForos,
    getComentariosByForoId,
    getForoById,
    addComentario,
    delComentario,
    addForo,
    delForo
}