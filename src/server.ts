import * as cors from 'cors';
import app from './app';
import { environment } from './env/environment';

// enable cors
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOption));

app.listen(environment.port, () => {
  console.log(`Express is listening on port ${environment.port}`);
});