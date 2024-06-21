const express = require('express');
const router = express.Router();

//respuestas del server a las peticiones
router.get('/', (req, res)=>{
    res.status(200).json({success: true, msg: "Listado de todos los campus"});
});
router.get('/:id', (req, res)=>{
    res.status(200).json({success: true, msg:`Campus con id ${req.params.id}`});
});

router.post('/', (req, res)=>{
    res.status(201).json({success: true, msg: "Nuevo campus creado"});
});

router.put('/:id', (req, res)=>{
    res.status(201).json({success: true, msg: `Modificado campus con id ${req.params.id}`});
});

router.delete('/:id', (req, res)=>{
    res.status(200).json({success: true, msg: `Eliminado campus con id ${req.params.id}`});
});

module.exports = router;