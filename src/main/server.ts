import app from './config/app'
import { route } from './config/routes'

app.use(route)

app.listen(3333, () => { console.log('server running on port 3333') })
