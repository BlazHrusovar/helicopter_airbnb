const express = require('express');
const router = express.Router();

const Helicopter = require('../models/Helicopter.js');

// Get
router.get('/getAll', (req, res) => {
    Helicopter.find({}, (err, helicopter) => {
        res.json(helicopter);
    });
});

// Post 
router.post('/add', (req, res) => {
    const {id, name} = req.body;
    const helicopter = new Helicopter({
         id: id,
         name: name
    });

    helicopter.save()
        .then(data => {
            res.send(`Helicopter ${name} was successfuly added to database.`);
        })
        .catch(err => {
            res.json(err);
        });
});

// Delete 
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    Helicopter.deleteOne({id: id})
        .then(() => {
            res.send(`Helicopter with id ${id} successfuly removed from database.`);
        })
        .catch(err => {
            res.json(err);
        });
});

// Update 
router.patch('/rent/:id', (req, res) => {
    const id = req.params.id;
    Helicopter.updateOne({id: id}, {$set: {isAvailable : false}})
        .then(() => {
            res.send(`Helicopter with id ${id} marked as currently being rented.`);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
