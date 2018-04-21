import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import apiRouter from './api/routes';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
  console.log('starting in dev mode');
}

const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));

// routes
app.use('/api', apiRouter);

// no static files yet
// app.use(controller.publicRoutes, express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
  console.log(`Knockout api running on: ${port}`);
});

export default app;
