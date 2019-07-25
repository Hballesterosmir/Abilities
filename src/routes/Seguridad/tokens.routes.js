import express from 'express';
import TokenControles from '../../controllers/Seguridad/tokens.controler';

const api = express.Router()

api.post('/GenerateTokenApi', TokenControles.PostTokenAip);
api.post('/ValidateTokenApi', TokenControles.PostTokenAipValidate);

export default api;