const minionsRouter = require('express').Router

module.exports = minionsRouter;

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
} = require('./db')

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'))
})

minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body)
    res.status(201).send(newMinion)
});

minionsRouter.param('/:minionid', (req, res, next) => {
    const minion = getFromDatabaseById('minions', id);
if(minion){
    req.minion = minion;
    next();
} else {
    res.status(404).send()
}});

minionsRouter.get('/:minionid', (req, res, next) => {
    res.send(req.minion)
})

minionsRouter.put('/:minionid', (req, res, next) => {
    const updateMinion = updateInstanceInDatabase('minions', req.body)
    res.send(updateMinion);
});

minionsRouter.delete('/:minionid', (req, res, next) => {
    const deleteMinion = deleteFromDatabaseById('minions', req.body.id)
if(deleteMinion){
    res.status(204)
} else {
    res.status(404)
}
res.send();
});

