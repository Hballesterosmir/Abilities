import express from 'express'
import questionController from '../controllers/question.controller'

const api  = express.Router()

api.get('/question', questionController.getList);
api.post('/question', questionController.postQuestion);
api.get('/question/:id', questionController.getById);
api.patch('/question/:id', questionController.putById);
api.delete('/question/:id', questionController.deleteById);

export default api;