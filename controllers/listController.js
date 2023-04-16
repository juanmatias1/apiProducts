import { openDatabase } from "../src/database.js";

export const listPizza = async (request, response) => {
    const db = await openDatabase();
    const products = await db.all(`
        SELECT * FROM products
         WHERE type = 1
    `);
    db.close();
    response.send(products)
};

export const listPastel = async (request, response) => {
    const db = await openDatabase();
    const products = await db.all(`
        SELECT * FROM products
        WHERE type = 2
    `);
    db.close();
    response.send(products)
};

export const listEsfiha = async (request, response) => {
    const db = await openDatabase();
    const products = await db.all(`
        SELECT * FROM products
        WHERE type = 3
    `);
    db.close();
    response.send(products)
};

export const listBebibas = async (request, response) => {
    const db = await openDatabase();
    const products = await db.all(`
        SELECT * FROM products
         WHERE type = 4
    `);
    db.close();
    response.send(products)
};

export const priceOrderLow = async (request, response) => {
    const db = await openDatabase();
    const products = await db.all(`
        SELECT * FROM products
         ORDER BY 
          price ASC
    `);
    db.close();
    response.send(products)
};

export const priceOrderHigh = async (request, response) => {
    const db = await openDatabase();
    const products = await db.all(`
        SELECT * FROM products
         ORDER BY 
          price DESC
    `);
    db.close();
    response.send(products)
};