import app from './config/app'
import { routes } from './routes'

app.use(routes)

app.listen(3333, () => { console.log('server running on port 3333') })
