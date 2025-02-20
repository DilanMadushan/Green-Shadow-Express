import express from 'express';
import Crop_Router from './Routers/Crop-Router'
import Field_Router from './Routers/Field-Routers'

const app: express.Application = express();
const port: number = 3000;

app.use(express.json());

app.use('/crop', Crop_Router);

app.use('/field',Field_Router);

app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});
