import express, { request, response } from "express";
import { insertProducts, listProducts, removeProducts, updateProducts } from "../controllers/productsController.js";
import { listBebibas, listEsfiha, listPastel, listPizza, priceOrderHigh, priceOrderLow } from "../controllers/listController.js";

const app = express();

app.use(express.json());

app.get('/api/ping', (request, response) => {
    response.send({
        message: "pong"
    });
});

app.get('/api/products', listProducts);
app.post('/api/products', insertProducts);
app.put('/api/products/:id', updateProducts);
app.delete('/api/products/:id', removeProducts);

app.get('/api/products/pizza', listPizza);
app.get('/api/products/pastel', listPastel);
app.get('/api/products/esfiha', listEsfiha);
app.get('/api/products/bebidas', listBebibas);

app.get('/api/products/orderPriceAsc', priceOrderLow);
app.get('/api/products/orderPriceDesc', priceOrderHigh);

app.listen(8000, () => {
    console.log("Server running on port 8000...");
});