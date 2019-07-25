import express from'express'
import bodyParser from 'body-parser'
import HomeRoutes from './routes/HomeApi.routes'
import skillsRoutes from './routes/skills.routes'
import questionRoutes from './routes/question.routes'
import TokensRoutes from './routes/Seguridad/tokens.routes'
const app = express();

//Body-Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Rutas
app.use('/api', TokensRoutes);
app.use('/api', skillsRoutes);
app.use('/api',questionRoutes);
app.use('/',HomeRoutes);



//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});


export default app;

