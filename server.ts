import express from 'express';
import Crop_Router from './Routers/Crop-Router'
import Field_Router from './Routers/Field-Routers'
import Log_Router from './Routers/Log-Routers'
import Staff_Router from './Routers/Staff-Router'
import Equipment_Router from './Routers/Equipment-Router'
import Vehicle_Router from './Routers/Vehicle-Routers'
import {authenticateToken} from './Routers/Auth-Router'
import Auth_Router from './Routers/Auth-Router'
import dotenv from 'dotenv'

const app: express.Application = express();
const port: number = 3000;

dotenv.config();

app.use(express.json());

app.use('/auth',Auth_Router);

app.use(authenticateToken);

app.use('/crop', Crop_Router);

app.use('/field',Field_Router);

app.use('/log',Log_Router);

app.use('/staff',Staff_Router)

app.use('/equipment',Equipment_Router)

app.use('/vehicle',Vehicle_Router)

app.use('/auth',Auth_Router)

app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});
