import express from 'express';
import Crop_Router from './Routers/Crop-Router'

const app: express.Application = express();
const port: number = 3000;

app.use(express.json());
app.use('/crop', Crop_Router);


app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});
