import express, { Request, Response } from 'express'
import database from '../database'

const router = express.Router()

router.get('/products', async (req: Request, res: Response) => {
  try {
    const pool = await database
    const products = await pool
      .request()
      .query('SELECT FirstName, MiddleName FROM Person.Person')
    return res.status(200).json({
      data: products.recordsets,
    })
  } catch (e) {
    if (!(e instanceof Error)) return
    return res.status(400).json({
      error: e.message,
    })
  }
})
export default router
