import { app } from './app';


export const server = app.listen(5000, () => 
{
  console.log(`starting app on server`);
});