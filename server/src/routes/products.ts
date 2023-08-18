import express, { Request, Response } from 'express'
import database from '../database'

const router = express.Router()

router.get('/products', async (req: Request, res: Response) => {
  try {
    const pool = await database
    const products = await pool.request().query(`
    SELECT TOP 10 Product.ProductID AS ProductID,
    Product.Name,
    Product.StandardCost AS Cost,
    Product.Color AS Color,
    LOWER(ProductCategory.Name) AS Category,
    ProductModel.Name AS Model,
    ProductDescription.Description AS Description,
    ProductPhoto.ThumbNailPhoto,
    ProductPhoto.LargePhoto
      FROM Production.Product AS Product
      JOIN Production.ProductSubcategory AS ProductSubcategory ON Product.ProductSubcategoryID = ProductSubcategory.ProductSubcategoryID
      JOIN Production.ProductCategory AS ProductCategory ON ProductSubcategory.ProductCategoryID = ProductCategory.ProductCategoryID
      JOIN Production.ProductProductPhoto AS ProductProductPhoto ON Product.ProductID = ProductProductPhoto.ProductID
      JOIN Production.ProductPhoto AS ProductPhoto ON ProductProductPhoto.ProductPhotoID = ProductPhoto.ProductPhotoID
      JOIN Production.ProductModel AS ProductModel ON Product.ProductModelID = ProductModel.ProductModelID
      JOIN Production.ProductModelProductDescriptionCulture AS ProductModelProductDescriptionCulture ON Product.ProductModelID = ProductModelProductDescriptionCulture.ProductModelID
      JOIN Production.ProductDescription AS ProductDescription ON ProductModelProductDescriptionCulture.ProductDescriptionID = ProductDescription.ProductDescriptionID
    WHERE ProductModelProductDescriptionCulture.CultureID = 'en'
      `)
    return res.status(200).json({
      products: products.recordsets,
    })
  } catch (e) {
    if (!(e instanceof Error)) return
    return res.status(400).json({
      error: e.message,
    })
  }
})

router.get('/categories', async (req: Request, res: Response) => {
  try {
    const pool = await database
    const dbRequest = await pool.request().query(``)
    return res.status(200).json({
      data: dbRequest.recordsets,
    })
  } catch (e) {
    if (!(e instanceof Error)) return
    return res.status(400).json({
      error: e.message,
    })
  }
})

export default router
