import express from 'express'
import skillsController from '../controllers/skills.controller'

const api = express.Router()

api.get('/skills', skillsController.getSkillsList);
api.post('/skills', skillsController.getSkillsById);
api.get('/skills/:id', skillsController.postSkills);
api.patch('/skills/:id', skillsController.putSkillsById);
api.delete('/skills/:id', skillsController.deleteSkillsById);

export default api;

