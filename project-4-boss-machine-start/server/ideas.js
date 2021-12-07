const ideasRouter = require('express').Router

module.exports = ideasRouter;

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
} = require('./db')

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
})

ideasRouter.post('/', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body)
    res.status(201).send(newIdea)
});

minionsRouter.param('/:ideaid', (req, res, next) => {
    const idea = getFromDatabaseById('ideas', id);
if(idea){
    req.idea = idea;
    next();
} else {
    res.status(404).send()
}});

ideasRouter.get('/:ideaid', (req, res, next) => {
    res.send(req.idea)
});

ideasRouter.put('/:ideaid', (req, res, next) => {
    const updateIdea = updateInstanceInDatabase('ideas', req.body)
    res.send(updateIdea);
});

ideasRouter.delete('/:ideaid', (req, res, next) => {
    const deleteIdea = deleteFromDatabaseById('ideas', req.body.id)
if(deleteIdea){
    res.status(204)
} else {
    res.status(404)
}
res.send();
});