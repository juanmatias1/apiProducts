import { openDatabase } from "../src/database.js";

export const listProducts = async (request, response) => {
    const db = await openDatabase();
    const products = await db.all(`
        SELECT * FROM products
    `);
    db.close();
    response.send(products)
};

export const insertProducts = async (request, response) => {
    const { type, nameProduct, price, description } = request.body;
    const db = await openDatabase();
    const data = await db.run(`
        INSERT INTO products (type, nameProduct, price, description)
        VALUES (?, ?, ?, ?)
    `, [type, nameProduct, price, description]);
    db.close();
    response.send({
        id: data.lastID,
        type,
        nameProduct,
        price,
        description
    })
};

export const updateProducts = async (request, response) => {
    const { type, nameProduct, price, description } = request.body;
    const { id } = request.params;
    const db = await openDatabase();
    const product = await db.get(`
    SELECT * FROM products WHERE id = ?
    `, [id]);

    if (product) {
        const data = await db.run(`
            UPDATE products
                SET type = ?,
                    nameProduct = ?,
                    price = ?,
                    description =?
                WHERE id = ?
        `, [type, nameProduct, price, description, id]);
        db.close();
        response.send({
            id,
            type,
            nameProduct,
            price,
            description
        });
        return;
    }
    db.close();
    response.send(product || {});
};

export const removeProducts = async (request, response) => {
    const { id } = request.params;
    const db = await openDatabase();
    const data = await db.run(`
        DELETE FROM products 
         WHERE id = ?
    `, [id]);
    db.close();
    response.send({
        id,
        message: `Produto [${id}] removido com sucesso`
    })
};