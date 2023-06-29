import app from './config/app'
import { route } from './config/routes'
import { pool } from './infra/db-config'

app.use(route)
// eslint-disable-next-line @typescript-eslint/no-floating-promises
const startServer = async (): Promise<void> => {
  const client = await pool.connect()
  try {
    app.listen(3333, () => {
      console.log('Server running on port 3333')
    })
  } catch (error) {
    console.error('Server error: ', error)
  } finally {
    client.release()
  }
}

startServer().catch(error => {
  console.error('Error starting server: ', error)
})
