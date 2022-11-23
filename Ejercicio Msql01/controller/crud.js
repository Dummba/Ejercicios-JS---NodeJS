const e = require('express')
const conexion = require('../database/db')

exports.save = (req, res) => {
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const fecha_nac = req.body.fecha_nac
    const peso = req.body.peso
    const altura = req.body.altura
    const domicilio = req.body.domicilio
    const cod_postal = req.body.cod_postal
    const num_m1 = req.body.num_m1
    const num_m2 = req.body.num_m2
    const email = req.body.email

    console.log(nombre +" - "+ apellido +" - "+ fecha_nac +" - "+ peso +" - "+ altura +" - "+ domicilio +" - "+ cod_postal +" - "+ num_m1 +" - "+ num_m2  +" - "+ email)

    conexion.query('INSERT INTO clientes SET ?', {nombre_cliente:nombre, apellido_cliente:apellido, fecha_nac_cliente:fecha_nac, peso_cliente:peso, altura_cliente:altura, domicilio_cliente:domicilio, cod_postal:cod_postal, movil01_cliente:num_m1, movil02_cliente:num_m2, email_cliente:email}, (error, data) => {
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    })
}

exports.update = (req, res) => {
    const id = req.body.id
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const fecha_nac = req.body.fecha_nac
    const peso = req.body.peso
    const altura = req.body.altura
    const domicilio = req.body.domicilio
    const cod_postal = req.body.cod_postal
    const num_m1 = req.body.num_m1
    const num_m2 = req.body.num_m2
    const email = req.body.email

    conexion.query('UPDATE clientes SET ? WHERE id_clientes = ?', [{nombre_cliente:nombre, apellido_cliente:apellido, fecha_nac_cliente:fecha_nac, peso_cliente:peso, altura_cliente:altura, domicilio_cliente:domicilio, cod_postal:cod_postal, movil01_cliente:num_m1, movil02_cliente:num_m2, email_cliente:email}, id], (error, data) => {

        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    })
}