const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));


console.log(produkte)


curl -X POST 'https://fakestoreapi.com/products' -H 'Content-Type: application/json' -d '{"title": "OpenAPI Kurs", "price": 150.99}'