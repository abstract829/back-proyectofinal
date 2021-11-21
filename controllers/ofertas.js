const { pool } = require('../db/config')

const getOfertas = async(req,res) => {
    try{
        const resp = await pool.query('SELECT * FROM ofertas')
        res.json({
            ok:true,
            msg:'Ofertas enviadas correctamente',
            ofertas: resp.rows
        })
    }catch{
        res.json({
            ok:false,
            msg: 'Error al enviar las ofertas'
        })
    }
}
const getOfertaById = async(req,res) => {
    const {id} = req.body
    try{
        const resp = await pool.query(`SELECT * FROM ofertas WHERE id = $1`, [id])
        if(resp.rows.length > 0){
            res.json({
                ok:true,
                msg:'Ofertas enviadas correctamente',
                ofertas: resp.rows
            })
        }else{
            res.json({
                ok:false,
                msg:`No existe una oferta con id ${id}`
            })
        }
        
    }catch{
        res.json({
            ok:false,
            msg: `Error al enviar la oferta con id ${id}`
        })
    }
}

const addOferta = async(req,res) => {
    const { title, desc, empresa, email, creado_por, categoria, tipo_jornada, salario_min,salario_max, img } = req.body
    try {
        const resp = await pool.query('INSERT INTO ofertas(title, "desc", empresa, email, creado_por, categoria, fecha, tipo_jornada, salario_min, salario_max, img) VALUES ($1,$2,$3,$4,$5,$6,now(),$7,$8,$9,$10)', [title,desc,empresa,email,creado_por,categoria,tipo_jornada,salario_min,salario_max,img])
        res.json({
            ok:true,
            msg: 'Agregado correctamente'
        })

    } catch (error) {
        res.json({
            ok:false,
            msg:`Error al agregar la oferta `,
            error
        })
    }
}
const delOferta = async (req,res) => {
    const { id } = req.params
    try {
        const resp = await pool.query('DELETE FROM ofertas WHERE id = $1', [id])
        res.json({
            ok:true,
            msg: `Oferta con id: ${id}, eliminada correctamente`,
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:`Error al borrar la oferta con id ${id}`,
            error
        })
    }
}
const agregarFoto = async(req,res) =>{
    const { img, id } = req.body
    try {
        const resp = await pool.query('UPDATE ofertas SET img = $1 WHERE id = $2',[img,id])
        res.json({
            ok:true,
            msg: `Imagen agregada correctamente en la oferta con id : ${id}`,
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
    getOfertas,
    getOfertaById,
    addOferta,
    delOferta,
    agregarFoto
}