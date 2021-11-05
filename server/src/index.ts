import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import { errorHandler } from './handlers/errorHandler';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
// if a jwt token is provided do x (private api)
// if a jwt token is not provided do y (public api)
// app.use(authMiddleware)
app.use(todoRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
