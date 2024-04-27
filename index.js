import app from './src/app';

import defaultRouter from './src/app/Routers/default-route';

// rutas
app.use(defaultRouter);

app.listen(app.get('port'), () => console.log(`server running in port ${app.get('port')}`));