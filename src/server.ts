import app from './app';
import { environment } from './env/environment';

app.listen(environment.port, () => {
  console.log(`Express is listening on port ${environment.port}`);
});