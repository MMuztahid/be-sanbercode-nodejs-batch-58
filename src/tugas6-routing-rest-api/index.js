const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let categories = [
    { id: 1, name: 'Elektronik' }, 
    { id: 2, name: 'Perabotan' }
];
let products = [
    { id: 1, name: 'Laptop', category: 'Elektronik' }, 
    { id: 2, name: 'Meja', category: 'Perabotan' }
];

//soal 1
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

//soal2
app.get('/api/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(p => p.id === categoryId);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

//soal 3
app.post('/api/cateegories', (req, res) => {
    const newCategory = req.body;
    newCategory.id = categories.length ? categories[categories.length - 1].id + 1 : 1;
    categories.push(newCategory);
    res.status(201).json({ message: 'New Category has been added' });
});

//soal 4
app.put('/api/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(p => p.id === categoryId);
    if (categoryIndex !== -1) {
        categories[categoryIndex] = { id: categoryId, ...req.body };
        res.json(categories[categoryIndex]);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
});

//soal 5
app.delete('/api/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    categories = categories.filter(p => p.id !== categoryId);
    res.status(204).send();
});

//soal 6
app.get('/api/products', (req, res) => {
    const query = req.query.name;

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(query.toLowerCase());
    });

    res.json(filteredProducts);
});

//soal 7
app.get('/api/categories/:category/products', (req, res) => {
    const category = req.params.category; 
    const searchQuery = req.query.name; 
    
    const filteredProductsByCategory = products.filter(product => product.category === category);
    const filteredProducts = filteredProductsByCategory.filter(product => {
        if(searchQuery===undefined){
            return product.name.toLowerCase()
        } else {
            return product.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
    });

    res.status(200).json(filteredProducts);
});

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});